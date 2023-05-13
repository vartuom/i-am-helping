import styles from "./SignupPage.module.scss";
import RadioGroup from "../../components/UI/RadioGroup/RadioGroup";
import Input from "../../components/UI/Input/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/UI/Buttons/Button";

const SignupPage = () => {
  return (
    <div className={styles.registr}>
      <h1>Регистрация</h1>
      <p>Выберите Вашу роль</p>
      <RadioGroup
        name={""}
        values={[
          { value: "Voluntier", label: " Волонтер " },
          { value: "Recipient", label: " Реципиент " },
        ]}
      />
      <Input typeInput={"registrName"} />
      <Input typeInput={"registrNumber"} />
      <Input typeInput={"email"} />
      <Input typeInput={"password"} />
      <Button
        theme={"dark"}
        type={"submit"}
        variant={"text"}
        extraClass={styles.button}
      >
        Зарегистрироваться
      </Button>
      <p>
        Уже зарегистрированы?
        <Link to={{ pathname: `/signin` }}>Войти</Link>
      </p>
    </div>
  );
};

export default SignupPage;
