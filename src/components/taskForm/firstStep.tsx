import React from 'react';
import s from "./taskForm.module.scss"
import {Button} from "../ui/buttons/Button";
import {useLocation, useNavigate} from "react-router-dom";

const FirstStep = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = () => {
        navigate("/secondStep", {
            state: { background: location.state.background },
        })
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
                Элементы шага 1
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