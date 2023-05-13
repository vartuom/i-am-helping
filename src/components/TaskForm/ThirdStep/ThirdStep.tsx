import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "../TaskForm.module.scss";
import m from "./ThirdStep.module.scss";
import FormsHeader from "../../ui/forms-header/FormsHeader";
import Select, { IOption } from "../../ui/Select/Select";
import TextArea from "../../ui/text-area/TextArea";
import { Button } from "../../UI/Buttons/Button";

const ThirdStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [select, setSelect] = useState<IOption | null>(null);
  const [text, setText] = useState<string>("");

  const onChangeSelect = (e: {
    value: React.SetStateAction<IOption | null>;
  }) => {
    setSelect(e.value);
  };

  const onChangeText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const options: IOption[] = [
    {
      label: "Audi",
      value: "audi",
    },
    {
      label: "Ferrari",
      value: "ferrari",
    },
    {
      label: "Mercedes Benz",
      value: "mercedes",
    },
    {
      label: "BMW",
      value: "bmw",
    },
    {
      label: "Tesla",
      value: "tesla",
    },
  ];

  const handleSubmit = () => {
    navigate("/confirmStep", {
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
          mobile="Дело"
        />
      </div>
      <div className={m.wrap}>
        <span className={m.select}>
          <p className={m.nameSelect}>Выберите тип задачи </p>
          <Select
            options={options}
            onChange={onChangeSelect}
            defaultValue="Выберите тип задачи"
          />
        </span>
        <TextArea value={text} onChange={onChangeText} />
      </div>
      <div className={s.form__controls}>
        <Button
          variant={"text"}
          theme={"dark"}
          label={"Создать"}
          type={"submit"}
        />
      </div>
    </form>
  );
};

export default ThirdStep;
