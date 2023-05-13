import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "../UI/buttons/Button";
import {da, te} from "date-fns/locale";

const ModalOne = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            Модальное окно № 1 <br/>
            <Button
                variant={"text"}
                theme={"dark"}
                label={"Продолжить"}
                type={"submit"}
                onClick={() =>
                    navigate("/modalTwo", {
                        state: { background: location.state.background },
                    })
                } />
        </div>
    );
};

export default ModalOne;