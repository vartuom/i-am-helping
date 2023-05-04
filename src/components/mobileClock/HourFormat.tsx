import React, { useEffect, useState, useRef, FC } from "react";
import { initialNumbersValue, returnSelectedValue } from "../../helpers";
import s from "./TimePicker.module.scss";
import PickerEffects from "./PickerEffects";

interface IHourFormat {
  height?: number | undefined;
  value?: string | null | undefined;
  setValue?: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  onAmPmChange?: number | null;
  setHourFormat?: any;
  hourFormat?: {
    mount: boolean;
    hourFormat: string | undefined;
  };
}

interface ISelectedValue {
  number: string;
  translatedValue: string;
  arrayNumber: boolean;
}
const HourFormat: FC<IHourFormat> = ({
  height,
  value,
  setValue,
  onAmPmChange,
  setHourFormat,
  hourFormat,
}) => {
  const Hours = [
    {
      number: "AM",
      translatedValue: (height! * 2).toString(),
      selected: false,
    },
    {
      number: "PM",
      translatedValue: height!.toString(),
      selected: false,
    },
  ];

  const [hours, setHours] = useState([
    {
      number: "AM",
      translatedValue: (height! * 2).toString(),
      selected: hourFormat?.hourFormat === "AM",
    },
    {
      number: "PM",
      translatedValue: height!.toString(),
      selected: hourFormat?.hourFormat === "PM",
    },
  ]);
  const mainListRef = useRef<any>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number | null>(
    null
  );
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState(
    parseInt(hours.filter((item) => item.selected === true)[0].translatedValue)
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
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

  const handleMouseUp = (e: any) => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
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

  const handleMouseLeave = (e: any) => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());

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
      mainListRef.current.style.transform = `translateY(${
        currentTranslatedValue + cursorPosition!
      }px)`;
    }
  }, [cursorPosition]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime! - dragStartTime!);

      let finalValue: any =
        Math.round(currentTranslatedValue / height!) * height!;
      if (finalValue < height!) finalValue = height;
      if (finalValue > height! * 2) finalValue = height! * 2;
      mainListRef.current.style.transform = `translateY(${finalValue}px)`;
      setCurrentTranslatedValue(finalValue);
      setCursorPosition(0);
    }
  }, [showFinalTranslate]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = (e: { propertyName: string }) => {
    if (e.propertyName === "transform") {
      const selectedValueArray = [
        {
          number: "AM",
          translatedValue: (height! * 2).toString(),
          arrayNumber: 0,
        },
        {
          number: "PM",
          translatedValue: height!.toString(),
          arrayNumber: 1,
        },
      ];
      selectedValueArray.map((item: any) => {
        if (parseInt(item.translatedValue) === currentTranslatedValue) {
          setSelectedNumber(item.arrayNumber);
          setHourFormat({ mount: true, hourFormat: item.number });
          setHours(() => {
            const newValue = Hours.map(
              (hour: {
                number: string;
                translatedValue: any;
                selected: boolean;
              }) => {
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
      });
    }
  };

  // handle click to select number
  const handleClickToSelect = (e: any) => {
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(e.target.dataset.translatedValue));
    }
  };

  /** ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: { deltaY: number }) => {
    if (e.deltaY > 0) {
      if (currentTranslatedValue <= height!) {
        setCurrentTranslatedValue((prev) => prev + height!);
      }
    } else if (currentTranslatedValue >= height! * 2) {
      setCurrentTranslatedValue((prev) => prev - height!);
    }
  };

  return (
    <div
      className={s.timeFormat}
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
        className={`${showFinalTranslate && s.timeFormatTransition}`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map((hourObj, index) => (
          <div
            key={index}
            className={s.timeHourCell}
            style={{ height: `${height}px` }}
          >
            <div
              className={`${s.timeFormatInnerCell}${
                hourObj.selected ? s.timeFormatSelected : ""
              }`}
              onClick={handleClickToSelect}
              data-translated-value={hourObj.translatedValue}
            >
              {hourObj.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourFormat;
