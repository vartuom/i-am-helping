import React, { FC } from "react";
import s from "./formsHeader.module.scss";
import image from "../../../images/avatar-temp.png";

interface IFormsHeader {
  avatar: string;
  name: string;
  phone: string;
}

const FormsHeader: FC<IFormsHeader> = (props) => {
  const { name, avatar, phone } = props;
  return (
    <>
      <div className={s.wrap}>
        <img className={s.avatar} src={avatar} alt="Ваш Аватар" />
        <div className={s.infoWrap}>
          <p className={s.name}>{name}</p>
          <p className={s.phone}>
            <span className={s.phone_indent}>Тел.:</span>
            {phone}
          </p>
        </div>
      </div>
    </>
  );
};

export default FormsHeader;
