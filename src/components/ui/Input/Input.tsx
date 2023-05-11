import React, { FC } from "react";
import s from "./Input.module.scss";

interface InputProps {
  typeInput: string;
  value?: string;
  valueName?: string;
  valuePhone?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onChangeName?: React.ChangeEventHandler<HTMLInputElement>;
  onChangePhone?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = (props) => {
  const {
    typeInput,
    value,
    valueName,
    valuePhone,
    onChange,
    onChangeName,
    onChangePhone,
  } = props;
  let options = {
    labelText: "",
    placeholder: "",
    adress: false,
    adminName: false,
    userInfoName: false,
    userInfoPhone: false,
  };

  function setTypeInput(typeInput: string) {
    switch (typeInput) {
      case "name":
        options.labelText = "Имя";
        options.placeholder = "Введите имя";
        options.adress = false;
        options.adminName = false;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "number":
        options.labelText = "Телефон";
        options.placeholder = "1234 5678 9000";
        options.adress = false;
        options.adminName = false;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "registrName":
        options.labelText = "Имя";
        options.placeholder = "Введите имя";
        options.adress = false;
        options.adminName = true;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "registrNumber":
        options.labelText = "Телефон";
        options.placeholder = "1234 5678 9000";
        options.adress = false;
        options.adminName = true;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "email":
        options.labelText = "Почта";
        options.placeholder = "example@example.ru";
        options.adress = false;
        options.adminName = true;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "password":
        options.labelText = "Пароль";
        options.placeholder = "Введите пароль";
        options.adress = false;
        options.adminName = true;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "adress":
        options.labelText = "Укажите место встречи";
        options.placeholder = "Например: ул. Нахимова, д.9, у подъезда №3";
        options.adress = true;
        options.adminName = false;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "adminName":
        options.labelText = "Введите имя ";
        options.placeholder = "Петр";
        options.adress = false;
        options.adminName = true;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
      case "userInfoName":
        options.labelText = "Имя:";
        options.placeholder = "Ваше имя";
        options.adress = false;
        options.adminName = false;
        options.userInfoName = true;
        options.userInfoPhone = false;
        break;
      case "userInfoPhone":
        options.labelText = "Тел:";
        options.placeholder = "Ваше номер телефона";
        options.adress = false;
        options.adminName = false;
        options.userInfoName = false;
        options.userInfoPhone = true;
        break;
      default:
        options.labelText = "Неверно";
        options.placeholder = "проверьте typeInput";
        options.adress = false;
        options.adminName = false;
        options.userInfoName = false;
        options.userInfoPhone = false;
        break;
    }
  }

  setTypeInput(typeInput);
  return (
    <>
      {!options.adminName &&
        !options.userInfoName &&
        !options.userInfoPhone && (
          <div
            className={!options.adress ? s.wrap : `${s.wrap} ${s.wrap_mobile}`}
          >
            <label className={`${s.label} ${s.label_mobile}`}>
              {options.labelText}
            </label>
            <input
              type="text"
              className={
                !options.adress ? s.input : `${s.input} ${s.input_mobile}`
              }
              placeholder={options.placeholder}
              value={value || ""}
              onChange={onChange}
            />
            {options.adress ? (
              <span className={`${s.input_supText} ${s.input_supTextMobile}`}>
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
            value={value || ""}
            onChange={onChange}
          />
        </div>
      )}
      {options.userInfoName && (
        <div className={s.userInfoNameWrap}>
          <label className={s.userInfoNameLabel}>{options.labelText}</label>
          <input
            type="text"
            className={s.userInfoNameInput}
            placeholder={options.placeholder}
            value={valueName || ""}
            onChange={onChangeName}
          />
        </div>
      )}
      {options.userInfoPhone && (
        <div className={s.userInfoNameWrap}>
          <label className={s.userInfoNameLabel}>{options.labelText}</label>
          <input
            type="text"
            className={s.userInfoNameInput}
            placeholder={options.placeholder}
            value={valuePhone || ""}
            onChange={onChangePhone}
          />
        </div>
      )}
    </>
  );
};

export default Input;
