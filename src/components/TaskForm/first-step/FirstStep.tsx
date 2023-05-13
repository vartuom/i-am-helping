import React, { ChangeEvent, useEffect, useState } from "react";
import s from "../TaskForm.module.scss";
import m from "./FirstStep.module.scss";
import { Button } from "../../UI/buttons/Button";
import FormsHeader from "../../UI/forms-header/FormsHeader";
import Clock from "../../Clock/Clock";
import Calendar from "../../Calendar/Calendar";
import Checkbox from "../../UI/checkbox/Checkbox";
import MobileClock from "../../MobileClock/MobileClock";
import { useLocation, useNavigate } from "react-router-dom";

const FirstStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = new Date();
  const firstTime = date.getHours();
  const secondTime = date.getMinutes();
  const [hour, setHour] = useState<number | undefined>(firstTime);
  const [minut, setMinut] = useState<number | undefined>(secondTime);
  const [startDate, setStartDate] = useState<Date>(date);
  const [check, setCheck] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [inputValue, setInputValue] = useState<string | undefined>("");
  const onChangeHour = (e: {
    target: { value: React.SetStateAction<number | undefined> };
  }) => {
    setHour(e.target.value);
  };
  const onChangeMinut = (e: {
    target: { value: React.SetStateAction<number | undefined> };
  }) => {
    setMinut(e.target.value);
  };
  const onChangeCheck = () => {
    setCheck(!check);
  };
  const onChangeInput = (e: string | undefined) => {
    setInputValue(e);
  };
  const handleSubmit = () => {
    navigate("/secondStep", {
      state: { background: location.state.background },
    });
  };

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
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <FormsHeader
          avatar="https://kartinkin.net/uploads/posts/2022-12/1670006799_1-kartinkin-net-p-belii-fon-dlya-avi-vkontakte-1.jpg"
          name="Иванов Иван Иванович"
          phone="+7(000) 000-00-00"
          mobile="Время"
        />
        <div className={m.wrap}>
          {!isMobile && (
            <Clock
              hour={hour}
              minut={minut}
              onChangeHour={onChangeHour as () => void}
              onChangeMinut={onChangeMinut as () => void}
            />
          )}
          {isMobile && (
            <MobileClock
              inputValue={inputValue}
              setInputValue={onChangeInput}
            />
          )}
          <div className={m.date}>
            <p className={m.dateText}>Дата</p>
            {isMobile && (
              <div className={m.mobileWrap}>
                <FormsHeader mobile="Дата" />
              </div>
            )}
            <Calendar selectedDate={date} onChange={setStartDate} />
            <div className={m.check}>
              <Checkbox
                name="firstStepModal"
                label="Бессрочно"
                isDisabled={false}
                isChecked={check}
                handleChange={onChangeCheck}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.form__controls}>
        <Button
          variant={"text"}
          theme={"dark"}
          label={"Продолжить"}
          type={"submit"}
        />
      </div>
    </form>
  );
};

export default FirstStep;
