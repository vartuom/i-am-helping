import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const TestPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div>
                Привет, я тут из Роута :) Ссылки делаются <NavLink to="/anotherTestPage"> так</NavLink>.
            </div>
            <ul>
                <li><Link to="/volunteer">Волонтёр</Link></li>
                <li><Link to="/recipient">Реципиент</Link></li>
                <li><Link to="/admin">Администратор</Link></li>
                <li><Link to="/mainadmin">Главный администратор</Link></li>

                <li><button
                    type="button"
                    onClick={() =>
                        navigate("modalOne", {
                            state: { background: location },
                        })
                    }
                >
                    Модальное окно 1
                </button></li>
            </ul>
        </>
    );
};

export default TestPage;