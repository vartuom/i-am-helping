import React from 'react';
import stules from './SignupPage.module.scss'
import RadioGroup from '../../components/ui/radioGroup/radioGroup';
import Input from '../../components/ui/Input/Input'

const SignupPage = () => {
    return (
        <div className={stules.registr}>
            <h1>Регистрация</h1>
            <p>Выберите Вашу роль</p>
            <RadioGroup name={''} values={[{value: 'Voluntier', label: ' Волонтер '}, {value: 'Recipient', label: ' Реципиент '}]} />
            <Input typeInput={'name'} />
            <Input typeInput={'number'} />
            <Input typeInput={'email'} />
            <Input typeInput={'password'} />
        </div>
    );
};

export default SignupPage;