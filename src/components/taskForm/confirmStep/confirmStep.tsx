import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "../taskForm.module.scss";
import m from "./confirmStep.module.scss";
import FormsHeader from "../../ui/formsHeader/formsHeader";
import TaskResult from "../../ui/taskResult/taskResult";
import { Button } from "../../ui/buttons/Button";

const ConfirmStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = "24.09.2022";
  const time = "16:00";
  const adress = "ул. Нахимова, д.9, у подъезда №3";
  const category = "категория";
  const taskName = "Выгулять собаку";
  const taskText =
    "Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!";

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <FormsHeader
          avatar="https://kartinkin.net/uploads/posts/2022-12/1670006799_1-kartinkin-net-p-belii-fon-dlya-avi-vkontakte-1.jpg"
          name="Иванов Иван Иванович"
          phone="+7(000) 000-00-00"
        />
      </div>
      <div className={m.wrap}>
        <TaskResult
          date={date}
          time={time}
          adress={adress}
          category={category}
          taskName={taskName}
          taskText={taskText}
        />
      </div>
      <div className={s.form__controls}>
        <Button
          variant={"text"}
          theme={"dark"}
          label={"Опубликовать"}
          type={"submit"}
        />
      </div>
    </form>
  );
};

export default ConfirmStep;
