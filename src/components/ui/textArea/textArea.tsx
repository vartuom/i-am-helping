import React, { FC, useEffect, useRef, useState } from "react";
import useAutosizeTextArea from "../../../hooks/useAutosizeTextArea";
import s from "./textArea.module.scss";

interface TextAreaProps {
  typeArea: string;
}

const TextArea: FC<TextAreaProps> = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 415;

  let options = {
    countDesktop: 300,
    countMobile: 256,
    areaName: "Опишите задачу",
    placeholder: "Например: Помогите выгулять собаку.",
  };

  return (
    <div className={s.wrap}>
      <label className={s.name}>{options.areaName}</label>
      <textarea
        className={s.text}
        maxLength={!isMobile ? options.countDesktop : options.countMobile}
        placeholder={options.placeholder}
        onChange={handleChange}
        ref={textAreaRef}
        rows={10}
        value={value}
      />
      <span className={s.count}>{`${
        (!isMobile ? options.countDesktop : options.countMobile) - value.length
      } знаков`}</span>
    </div>
  );
};

export default TextArea;
