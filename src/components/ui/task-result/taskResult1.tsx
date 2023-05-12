import React, { FC } from "react";
import s from "./taskResult1.module.scss";
import { LocationIcon } from "../icons/location-icon/location-icon";

interface ITaskResult {
  date: string;
  time: string;
  adress: string;
  category: string;
  taskName: string;
  taskText: string;
}

const TaskResult: FC<ITaskResult> = (props) => {
  const { date, time, adress, category, taskName, taskText } = props;
  return (
    <div className={s.wrap}>
      <div className={s.date}>
        {date}
        <span>{time}</span>
      </div>
      <div className={s.adress}>
        <LocationIcon type="blue" />
        <span>{adress}</span>
      </div>
      <div className={s.category}>
        <span>{category}</span>
      </div>
      <h2 className={s.taskName}>{taskName}</h2>
      <p className={s.taskText}>{taskText}</p>
    </div>
  );
};

export default TaskResult;
