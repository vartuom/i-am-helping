import React, { useEffect, useState, useRef, FC, RefObject } from "react";
import { initialNumbersValue, returnSelectedValue } from "../../../helpers";
import s from "./MinuteWheel.module.scss";

interface IMinuteWheel {
  height?: number;
  value?: string | null | undefined;
  setValue?: ((value: string | any) => void) | undefined;
}

interface IItem {
  number: string | null;
  translatedValue: string | null;
  selected: boolean;
}
const MinuteWheel: FC<IMinuteWheel> = ({ height, value, setValue }) => {
  const [hours, setHours] = useState(
    initialNumbersValue(height, 60, parseInt(value!.slice(3, 6)))
  );
  const mainListRef = useRef(null) as RefObject<HTMLDivElement> | null;
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number | null>(
    null
  );

  const [currentTranslatedValue, setCurrentTranslatedValue] = useState<
    number | null
  >(
    parseInt(
      initialNumbersValue(height, 60, parseInt(value!.slice(3, 6))).filter(
        (item: IItem) =>
          item.number === value!.slice(3, 6) && item.selected === true
      )[0].translatedValue
    )
  );
  const [startCapture, setStartCapture] = useState<boolean | null>(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState<boolean | null>(
    false
  );
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number | null>(null);
  const [dragEndTime, setDragEndTime] = useState<number | null>(null);
  // drag duration
  const [dragDuration, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [dragType, setDragType] = useState<string | null>(null);
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null);
  // selected number
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleMouseDown = (e: {
    clientY: React.SetStateAction<number | null>;
  }) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleTouchStart = (e: any) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.targetTouches[0].clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleMouseUp = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev! + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime! <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition! < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseLeave = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev! + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime! <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition! < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseMove = (e: { clientY: number }) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition!);
    } else {
      setCursorPosition(0);
    }
  };

  const handleTouchMove = (e: any) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition!);
    } else {
      setCursorPosition(0);
    }
  };

  // preview translation
  useEffect(() => {
    if (startCapture) {
      mainListRef!.current!.style.transform = `translateY(${
        currentTranslatedValue! + cursorPosition!
      }px)`;
    }
  }, [cursorPosition]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime! - dragStartTime!);
      if (dragEndTime! - dragStartTime! <= 100 && cursorPosition !== 0) {
        let currentValue: number | undefined;
        if (dragDirection === "down") {
          currentValue =
            currentTranslatedValue! -
            (120 / (dragEndTime! - dragStartTime!)) * 100;
        } else if (dragDirection === "up") {
          currentValue =
            currentTranslatedValue! +
            (120 / (dragEndTime! - dragStartTime!)) * 100;
        }
        let finalValue = Math.round(currentValue! / height!) * height!;
        if (finalValue < height! * -177) finalValue = height! * -177;
        if (finalValue > height! * 2) finalValue = height! * 2;

        mainListRef!.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      if (dragEndTime! - dragStartTime! > 100 && cursorPosition !== 0) {
        let finalValue =
          Math.round(currentTranslatedValue! / height!) * height!;
        if (finalValue < height! * -177) finalValue = height! * -177;
        if (finalValue > height! * 2) finalValue = height! * 2;
        mainListRef!.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      setCursorPosition(0);
    }
  }, [showFinalTranslate]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = () => {
    returnSelectedValue(height, 60).map(
      (item: {
        translatedValue: string;
        arrayNumber: React.SetStateAction<null>;
        number: any;
      }) => {
        if (parseInt(item.translatedValue) === currentTranslatedValue) {
          setSelectedNumber(item.arrayNumber);
          setValue!(
            (prev: string | any[]) => `${prev.slice(0, 2)}:${item.number}`
          );
          setHours(() => {
            const newValue = initialNumbersValue(height, 60).map(
              (hour: { number: string; translatedValue: number }) => {
                if (
                  hour.number == item.number &&
                  hour.translatedValue == currentTranslatedValue
                ) {
                  return {
                    ...hour,
                    selected: true,
                  };
                }
                return hour;
              }
            );
            return newValue;
          });
        }
      }
    );
  };

  // handle click to select number
  const handleClickToSelect = (e: any) => {
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(e.target.dataset.translatedValue));
    }
  };

  const isFastCondition = showFinalTranslate && dragType === "fast";
  const isSlowCondition = showFinalTranslate && dragType === "slow";

  /* ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: { deltaY: number }) => {
    if (e.deltaY > 0) {
      if (currentTranslatedValue! < height! * 2) {
        setCurrentTranslatedValue((prev) => prev! + height!);
      }
    } else if (currentTranslatedValue! > height! * -177) {
      setCurrentTranslatedValue((prev) => prev! - height!);
    }
  };

  return (
    <div
      className={s.timeMinute}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height! * 5 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${isFastCondition === true && s.timeFast} ${
          isSlowCondition === true && s.timeSlow
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map(
          (
            hourObj: {
              selected: any;
              translatedValue: any;
              number:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            <div
              key={index}
              className={s.timeMinuteCell}
              style={{ height: `${height}px` }}
            >
              <div
                className={`${s.timeMinuteInner} ${
                  hourObj.selected ? s.timeHourInnerSelected : ""
                }`}
                onClick={handleClickToSelect}
                data-translated-value={hourObj.translatedValue}
              >
                {hourObj.number}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MinuteWheel;
