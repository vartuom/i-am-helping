import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const ModalTwo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            Модальное окно № 2 <br/>
            <button
                type="button"
                onClick={() =>
                    navigate("/modalThree", {
                        state: { background: location.state.background },
                    })
                }
            >
                Модальное окно 3
            </button>
        </div>
    );
};

export default ModalTwo;