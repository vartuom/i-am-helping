import React, { FC } from "react";
import s from "./MobileClock1.module.scss";
import TimePicker from "./TimePicker/TimePicker";

interface IMobileClock {
  inputValue: string | undefined;
  setInputValue: (value: string | undefined) => void;
}

const MobileClock: FC<IMobileClock> = ({ inputValue, setInputValue }) => {
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
