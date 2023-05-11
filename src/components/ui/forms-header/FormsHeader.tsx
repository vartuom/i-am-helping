import React, { FC, useEffect, useState } from "react";
import { Avatar } from "../../avatar/Avatar";
import s from "./FormsHeader.module.scss";

interface IFormsHeader {
  avatar?: string;
  name?: string;
  phone?: string;
  mobile?: string;
}

const FormsHeader: FC<IFormsHeader> = (props) => {
  const { name, avatar, phone, mobile } = props;
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
  return (
    <>
      {!isMobile && (
        <div className={s.wrap}>
          <Avatar size={52} url={avatar!} />
          <div className={s.infoWrap}>
            <p className={s.name}>{name}</p>
            <p className={s.phone}>
              <span className={s.phone_indent}>Тел.:</span>
              {phone}
            </p>
          </div>
        </div>
      )}
      {isMobile && (
        <div className={s.mobileWrap}>
          <p className={s.mobileText}>{mobile}</p>
          <span className={s.mobileUnderline}></span>
        </div>
      )}
    </>
  );
};

export default FormsHeader;
