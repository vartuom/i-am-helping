import React, { FC, useState } from "react";
import s from "./MobileClock.module.scss";
import TimePicker from "./TimePicker";

const MobileClock: FC<any> = () => {
  return (
    <>
      <TimePicker></TimePicker>
    </>
  );
};

export default MobileClock;
