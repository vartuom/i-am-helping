import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const ModalOne = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            Модальное окно № 1 <br/>
            <button
                type="button"
                onClick={() =>
                    navigate("/modalTwo", {
                        state: { background: location.state.background },
                    })
                }
            >
                Модальное окно 2
            </button>
        </div>
    );
};

export default ModalOne;