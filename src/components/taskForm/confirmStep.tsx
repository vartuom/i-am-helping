import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import s from "./taskForm.module.scss";
import {Button} from "../ui/buttons/Button";

const ConfirmStep = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = () => {
        navigate("/")
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
                Подтверждение перед отправкой
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