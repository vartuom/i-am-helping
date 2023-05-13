import React, { FC, useEffect, useState } from "react";
import s from "./TimePickerSelection.module.scss";
import HourWheel from "../HourWheel/HourWheel";
import MinuteWheel from "../MinuteWheel/MinuteWheel";
import { Button } from "../../UI/buttons/Button";

interface ITimePickerSelection {
  inputValue: string | undefined;
  pickerDefaultValue?: string | undefined;
  initialValue?: string | null;
  onChange?: (value: string | undefined) => void;
  height?: number | undefined;
  onSave?: (value: string | undefined) => void;
  onCancel?: () => void;
  cancelButtonText?: string | undefined;
  saveButtonText?: string | undefined;
  controllers?: boolean;
  setInputValue?: (value: string | undefined) => void;
  setIsOpen?: (value: boolean | undefined) => void;
  separator?: boolean;
  use12Hours?: boolean;
  onAmPmChange?: (value: string | undefined) => void;
}

const TimePickerSelection: FC<ITimePickerSelection> = ({
  pickerDefaultValue,
  initialValue,
  onChange,
  height,
  onSave,
  onCancel,
  cancelButtonText,
  saveButtonText,
  controllers,
  setInputValue,
  setIsOpen,
  separator: seperator,
  use12Hours,
  onAmPmChange,
}) => {
  const initialTimeValue = use12Hours
    ? initialValue?.slice(0, 5)
    : initialValue;
  const [value, setValue] = useState(
    initialValue === null ? pickerDefaultValue : initialTimeValue
  );
  const [hourFormat, setHourFormat] = useState({
    mount: false,
    hourFormat: initialValue?.slice(6, 8),
  });

  useEffect(() => {
    if (controllers === false) {
      const finalSelectedValue = use12Hours
        ? `${value} ${hourFormat.hourFormat}`
        : value;

      setInputValue!(finalSelectedValue!);
      onChange!(finalSelectedValue!);
    }
  }, [value]);

  useEffect(() => {
    if (hourFormat.mount) {
      onAmPmChange!(hourFormat.hourFormat);
    }
  }, [hourFormat]);

  const params = {
    height,
    value,
    setValue,
    controllers,
    use12Hours,
    onAmPmChange,
    setHourFormat,
    hourFormat,
  };

  const handleSave = () => {
    const finalSelectedValue = use12Hours
      ? `${value} ${hourFormat.hourFormat}`
      : value;
    setInputValue!(finalSelectedValue!);
    onChange!(finalSelectedValue!);
    onSave!(finalSelectedValue!);
    setIsOpen!(false);
  };

  return (
    <div className={`${s.wrap} ${s.wrapTransition}`}>
      <div className={s.popupHeader}>
        <p className={s.popupHeaderText}>Время</p>
        <span className={s.popupHeaderUnderline}></span>
      </div>
      <div
        className={s.timeContainer}
        style={{ height: `${height! * 2 + 40}px` }}
      >
        <div
          className={s.timeOverlay}
          style={{
            top: `${height! * 2 + 20}px`,
            height: `${height}px`,
          }}
        />
        <HourWheel {...params} />
        {seperator && <div className={s.timeColumn}></div>}
        <MinuteWheel {...params} />
      </div>

      <div className={s.buttonQ}>
        <Button
          variant="text"
          label="Применить"
          onClick={handleSave}
          size="large"
          theme="dark"
          type="button"
        />
      </div>
    </div>
  );
};

export default TimePickerSelection;
