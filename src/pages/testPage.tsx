import React from 'react';
import {NavLink} from "react-router-dom";
import UserCard from '../components/userCard/userCard';
import { user } from '../components/userCard/userCard';

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
        <UserCard {...user}/>
        </>
    );
};

export default TestPage;