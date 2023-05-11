import React, { FC, useEffect, useState } from "react";
import { Portal } from "react-portal";
import TimePickerSelection from "../TimePickerSelection/TimePickerSelection";
import s from "./TimePicker.module.scss";

interface ITimePicker {
  setInputValue: (value: string | undefined) => void;
  inputValue: string | undefined;
  value?: string | null;
  cellHeight?: number;
  placeHolder?: string;
  pickerDefaultValue?: string;
  onChange?: (value: string | undefined) => void;
  onFocus?: () => void;
  onSave?: (value: string | undefined) => void;
  onCancel?: () => void;
  disabled?: boolean;
  isOpen?: boolean;
  required?: boolean;
  cancelButtonText?: string;
  saveButtonText?: string;
  controllers?: boolean;
  seperator?: boolean;
  id?: string | undefined;
  use12Hours?: boolean;
  onAmPmChange?: (value: string | undefined) => void;
  name?: string | undefined;
  onOpen?: () => void;
  popupClassName?: null;
  inputClassName?: null;
}

const TimePicker: FC<ITimePicker> = ({
  value: initialValue = null,
  cellHeight = 70,
  placeHolder = ":",
  pickerDefaultValue = "10:00",
  onChange = () => {},
  onFocus = () => {},
  onSave = () => {},
  onCancel = () => {},
  disabled = false,
  isOpen: initialIsOpenValue = false,
  required = false,
  cancelButtonText = "Cancel",
  saveButtonText = "Save",
  controllers = true,
  seperator = true,
  id = undefined,
  use12Hours = false,
  onAmPmChange = () => {},
  name = undefined,
  onOpen = () => {},
  popupClassName = null,
  inputClassName = null,
  inputValue,
  setInputValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(initialIsOpenValue);
  const [height, setHeight] = useState(cellHeight);
  // const [inputValue, setInputValue] = useState(initialValue);
  // console.log(inputValue);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFocus = () => {
    onFocus();
    onOpen();
  };

  let finalValue = inputValue;

  if (initialValue === null && use12Hours) {
    finalValue = `${pickerDefaultValue} AM`;
  } else if (initialValue === null && !use12Hours) {
    finalValue = pickerDefaultValue;
  }

  const params = {
    inputValue,
    onChange,
    height,
    onSave,
    onCancel,
    cancelButtonText,
    saveButtonText,
    controllers,
    setInputValue,
    setIsOpen,
    seperator,
    use12Hours,
    onAmPmChange,
    initialValue: finalValue,
    pickerDefaultValue,
  };

  return (
    <>
      <div className={s.wrapInput} onClick={handleClick}>
        <input
          id={id}
          name={name}
          className={`${s.timeInput} ${inputClassName || ""} ${s.inputMain}`}
          value={inputValue === null ? "" : inputValue}
          type="text"
          placeholder={placeHolder}
          readOnly
          disabled={disabled}
          required={required}
          onFocus={handleFocus}
        />
        <span className={s.inputPlaceholder}></span>
      </div>
      {isOpen && !disabled && (
        <Portal>
          <div className={s.timePopup}>
            <div
              className={`${s.timePopupOverlay} ${popupClassName || ""}`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <TimePickerSelection {...params} />
          </div>
        </Portal>
      )}
    </>
  );
};

export default TimePicker;
