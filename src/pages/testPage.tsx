import React from 'react';
import {NavLink} from "react-router-dom";

const TestPage = () => {
    return (
        <>
        <div>
            Привет, я тут из Роута :) Ссылки делаются <NavLink to="/anotherTestPage"> так</NavLink>.
        </div>
        <button>Волонтёр</button>
        <button>Реципиент</button>
        <button>Администратор</button>
        <button>Главный администратор</button>
        </>
    );
};

export default TestPage;