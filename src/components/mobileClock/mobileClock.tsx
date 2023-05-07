import React, { FC } from "react";
import s from "./MobileClock.module.scss";
import TimePicker from "./TimePicker/TimePicker";

const MobileClock: FC<any> = ({ inputValue, setInputValue }) => {
  return (
    <>
      <TimePicker
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></TimePicker>
    </>
  );
};

export default MobileClock;

//const [inputValue, setInputValue] = useState(null);
//<MobileClock inputValue={inputValue} setInputValue={setInputValue} />
