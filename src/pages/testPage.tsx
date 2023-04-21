import React from 'react';
import {NavLink} from "react-router-dom";

const TestPage = () => {
    return (
        <div>
            Привет, я тут из Роута :) Ссылки делаются <NavLink to="/anotherTestPage"> так</NavLink>.
        </div>
    );
};

export default TestPage;