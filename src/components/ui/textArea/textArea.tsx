import React, { FC, useRef, useState } from "react";
import useAutosizeTextArea from "../../../hooks/useAutosizeTextArea";
import s from "./textArea.module.scss";

interface TextAreaProps {
  typeArea: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { typeArea } = props;
  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };
  let options = {
    countDesktop: 300,
    countMobile: 256,
    areaName: "",
    placeholder: "",
    recipientCreateForm: false,
    adminCreateForm: false,
    mobileCreateForm: false,
  };

  function setTypeInput(typeArea: string) {
    switch (typeArea) {
      case "recipientCreateForm":
        options.areaName = "Опишите задачу";
        options.placeholder = "Например: Помогите выгулять собаку.";
        options.recipientCreateForm = true;
        options.adminCreateForm = false;
        options.mobileCreateForm = false;
        break;
      case "adminCreateForm":
        options.areaName = "Опишите задачу";
        options.placeholder = "Например: Помогите выгулять собаку.";
        options.recipientCreateForm = false;
        options.adminCreateForm = true;
        options.mobileCreateForm = false;
        break;
      case "mobileCreateForm":
        options.areaName = "Опишите задачу";
        options.placeholder = "Например: Помогите выгулять собаку.";
        options.recipientCreateForm = false;
        options.adminCreateForm = false;
        options.mobileCreateForm = true;
        break;
      default:
        options.areaName = "Неверно";
        options.placeholder = "проверьте typeInput";
        options.recipientCreateForm = false;
        options.adminCreateForm = false;
        break;
    }
  }
  setTypeInput(typeArea);
  return (
    <div className={s.wrap}>
      <label className={s.name}>{options.areaName}</label>
      <textarea
        className={!options.adminCreateForm ? s.text : s.textAdminColor}
        maxLength={
          options.adminCreateForm || options.recipientCreateForm
            ? options.countDesktop
            : options.countMobile
        }
        placeholder={options.placeholder}
        onChange={handleChange}
        ref={textAreaRef}
        rows={10}
        value={value}
      />
      <span
        className={!options.adminCreateForm ? s.count : s.countAdminColor}
      >{`${
        (options.adminCreateForm || options.recipientCreateForm
          ? options.countDesktop
          : options.countMobile) - value.length
      } знаков`}</span>
    </div>
  );
};

export default TextArea;
