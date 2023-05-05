import React, { ChangeEvent, useState } from "react";
import s from "../taskForm.module.scss";
import m from "./firstStep.module.scss";
import { Button } from "../../ui/buttons/Button";
import FormsHeader from "../../ui/formsHeader/formsHeader";
import Clock from "../../Clock/Clock";
import Calendar from "../../calendar/Calendar";
import Checkbox from "../../ui/checkbox/checkbox";
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

  const handleSubmit = () => {
    navigate("/secondStep", {
      state: { background: location.state.background },
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <FormsHeader
          avatar="https://kartinkin.net/uploads/posts/2022-12/1670006799_1-kartinkin-net-p-belii-fon-dlya-avi-vkontakte-1.jpg"
          name="Иванов Иван Иванович"
          phone="+7(000) 000-00-00"
        />
        <div className={m.wrap}>
          <Clock
            hour={hour}
            minut={minut}
            onChangeHour={onChangeHour}
            onChangeMinut={onChangeMinut}
          />
          <div className={m.date}>
            <p className={m.dateText}>Дата</p>
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
