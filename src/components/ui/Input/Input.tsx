import React, { FC, useState } from "react";
import s from "./Input.module.scss";

interface InputProps {
  typeInput: string;
}

const Input: FC<InputProps> = (props) => {
  const { typeInput } = props;
  let options = {
    labelText: "",
    placeholder: "",
    adress: false,
    adminName: false,
  };

  if (typeInput === "name") {
    options.labelText = "Имя";
    options.placeholder = "Введите имя";
    options.adress = false;
    options.adminName = false;
  } else if (typeInput === "number") {
    options.labelText = "Телефон";
    options.placeholder = "1234 5678 9000";
    options.adress = false;
    options.adminName = false;
  } else if (typeInput === "adress") {
    options.labelText = "Укажите место встречи";
    options.placeholder = "Например: ул. Нахимова, д.9, у подъезда №3";
    options.adress = true;
    options.adminName = false;
  } else if (typeInput === "adminName") {
    options.labelText = "Введите имя ";
    options.placeholder = "Петр";
    options.adress = false;
    options.adminName = true;
  } else {
    options.labelText = "Неверно";
    options.placeholder = "проверьте typeInput";
    options.adress = false;
    options.adminName = false;
  }

  const [value, setValue] = useState("");
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  return (
    <>
      {!options.adminName && (
        <div className={s.wrap}>
          <label className={s.label}>{options.labelText}</label>
          <input
            type="text"
            className={s.input}
            placeholder={options.placeholder}
            value={value}
            onChange={onChange}
          />
          {options.adress ? (
            <span className={s.input_supText}>
              * Будте осторожны, если указываете домашний <span>адресс</span>,{" "}
              <span>не</span> пишите его полностью.
            </span>
          ) : (
            false
          )}
        </div>
      )}
      {options.adminName && (
        <div className={s.popupWrap}>
          <label className={s.popupLabel}>{options.labelText}</label>
          <input
            type="text"
            className={s.popupInput}
            placeholder={options.placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
};

export default Input;
