/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, type FC } from "react";
import { useViewOnClick } from "../../../hooks/useViewOnClick";
import cls from "./Select.module.scss";

export interface IOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  defaultValue?: string;
  options: IOption[];
  onChange: (value: any) => void;
  extraClass?: string;
}

const Select: FC<SelectProps> = (props) => {
  const {
    defaultValue,
    options,
    onChange,
    extraClass = "",
    ...otherProps
  } = props;
  const [selectedValue, setSelectedValue] = useState<IOption | null>(null);
  const { toggle, isOpen } = useViewOnClick();

  const getSelectValue = () => {
    if (selectedValue != null) {
      return selectedValue.label;
    }
    return defaultValue;
  };

  const handleItemSelectClick = (option: IOption) => {
    setSelectedValue(option);
    onChange(option);
  };

  return (
    <div className={cls.dropdown_container}>
      <div onClick={toggle} className={cls.dropdown_input}>
        <div className={cls.dropdown_selected_value}>{getSelectValue()}</div>
        <div className={cls.dropdown_tools}></div>
        {isOpen && (
          <div className={cls.dropdown_menu}>
            {options.map((option) => (
              <div
                className={`${cls.dropdown_item} ${
                  selectedValue?.value === option.value ? "selected" : ""
                }`}
                onClick={() => {
                  handleItemSelectClick(option);
                }}
                key={option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
