import React, { FC } from "react";
import s from "./TimePicker.module.scss";

interface IPickerEffects {
  height: any;
}

const PickerEffects: FC<IPickerEffects> = ({ height }) => {
  return (
    <>
      <div className={s.timeTopShadow} style={{ height: `${height * 2}px` }} />
      <div
        className={s.timeBottomShadow}
        style={{ height: `${height * 2}px` }}
      />
    </>
  );
};

export default PickerEffects;
