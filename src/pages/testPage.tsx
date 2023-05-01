import React from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import UserCard from '../components/userCard/userCard';
import UserSettings from '../components/userSettings/userSettings';

const TestPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div>
                Привет, я тут из Роута :) Ссылки делаются <NavLink to="/anotherTestPage"> так</NavLink>.
            </div>
            <button>Волонтёр</button>
            <button>Реципиент</button>
            <button>Администратор</button>
            <button>Главный администратор</button>
            <button
                type="button"
                onClick={() =>
                    navigate("modalOne", {
                        state: { background: location },
                    })
                }
            >
                Модальное окно 1
            </button>
            <UserSettings />
        </>
    );
};

export default TestPage;