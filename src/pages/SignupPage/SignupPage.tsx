import React from 'react';
import stules from './SignupPage.module.scss'
import RadioGroup from '../../components/ui/radioGroup/radioGroup';
import Input from '../../components/ui/Input/Input'
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className={stules.registr}>
            <h1>Регистрация</h1>
            <p>Выберите Вашу роль</p>
            <RadioGroup name={''} values={[{value: 'Voluntier', label: ' Волонтер '}, {value: 'Recipient', label: ' Реципиент '}]} />
            <Input typeInput={'registrName'} />
            <Input typeInput={'registrNumber'} />
            <Input typeInput={'email'} />
            <Input typeInput={'password'} />
            <p>
            Уже зарегистрированы?
            <Link to={{ pathname: `/signin` }}>
              Войти
            </Link>
          </p>
        </div>
    );
};

export default SignupPage;