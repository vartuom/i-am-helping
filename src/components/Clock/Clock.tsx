import React, { FC, useEffect, useState } from "react";
import s from "./Clock.module.scss";

interface IClock {
  hour: number | undefined;
  minut: number | undefined;
  onChangeHour: (value: any) => void;
  onChangeMinut: (value: any) => void;
}

const Clock: FC<IClock> = (props) => {
  const { hour, minut, onChangeHour, onChangeMinut } = props;

  function onlyNumber(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

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
      <div className={s.wrap}>
        <p className={s.text}>Время</p>
        {isMobile && <div className={s.mobileLine}></div>}
        <label className={s.inputWrap}>
          <input
            value={Number(hour) >= 24 ? 0 : hour}
            onChange={onChangeHour}
            onKeyPress={(event) => {
              onlyNumber(event);
            }}
            maxLength={2}
            className={s.time}
          />
          <span>:</span>
          <input
            value={Number(minut) >= 60 ? 0 : minut}
            onKeyPress={(event) => {
              onlyNumber(event);
            }}
            onChange={onChangeMinut}
            maxLength={2}
            className={s.time}
          />
        </label>
      </div>
    </>
  );
};

export default Clock;
