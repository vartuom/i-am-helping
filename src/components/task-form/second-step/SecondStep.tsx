import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "../TaskForm.module.scss";
import m from "./SecondStep.module.scss";
import FormsHeader from "../../ui/forms-header/FormsHeader";
import { Button } from "../../ui/buttons/Button";
import { MapForSeacrh } from "../../maps/MapForSearch";

const SecondStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState<string>("");
  const [width, setWidth] = useState<number>(window.innerWidth);
  const onChangeAdress = (e: string) => {
    setValue(e);
  };
  const handleSubmit = () => {
    navigate("/thirdStep", {
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
          mobile="Место встречи"
        />
        <div className={m.wrap}>
          <div className={m.map}>
            <MapForSeacrh value={value} setValue={onChangeAdress} />
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

export default SecondStep;
