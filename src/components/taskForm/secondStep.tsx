import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import s from "./taskForm.module.scss";
import {Button} from "../ui/buttons/Button";

const SecondStep = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = () => {
        navigate("/thirdStep", {
            state: { background: location.state.background },
        })
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
                Элементы шага 2
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