import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "../taskForm.module.scss";
import m from "./secondStep.module.scss";
import FormsHeader from "../../ui/formsHeader/formsHeader";
import Input from "../../ui/Input/Input";
import { Button } from "../../ui/buttons/Button";

const SecondStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adress, setAdress] = useState<string | undefined>("");
  const onChangeAdress = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setAdress(e.target.value);
  };
  const handleSubmit = () => {
    navigate("/thirdStep", {
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
          <Input typeInput="adress" value={adress} onChange={onChangeAdress} />
          <div className={m.map}></div>
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

export default SecondStep;
