import React from 'react';
import {NavLink} from "react-router-dom";
import Example from '../components/example/Example';

const TestPage = () => {
    return (
        <>
        <div>
            Привет, я тут из Роута :) Ссылки делаются <NavLink to="/anotherTestPage"> так</NavLink>.
        </div>
        <Example />
        </>
    );
};

export default TestPage;