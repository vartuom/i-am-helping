import React from 'react';
import stules from './SigninPage.module.scss'
import RadioGroup from '../../components/ui/radioGroup/radioGroup';
import Input from '../../components/ui/Input/Input'
import { Link } from 'react-router-dom';

const SigninPage = () => {
    return (
        <div className={stules.registr}>
            <h1>Авторизация</h1>
            <Input typeInput={'email'} />
            <Input typeInput={'password'} />
            <p>
            Еще не зарегистрированы?
            <Link to={{ pathname: `/signup` }}>
              Регистрация
            </Link>
          </p>
        </div>
    );
};

export default SigninPage;