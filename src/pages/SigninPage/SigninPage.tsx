import stules from './SigninPage.module.scss'
import Input from '../../components/UI/Input/Input'
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/buttons/Button';

const SigninPage = () => {
  return (
    <div className={stules.registr}>
      <h1>Авторизация</h1>
      <Input typeInput={'email'} />
      <Input typeInput={'password'} />
      <Button theme={'dark'} type={'submit'} variant={'text'} extraClass={stules.button}>Войти</Button>
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