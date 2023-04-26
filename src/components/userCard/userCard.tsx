import styles from "./userCard.module.scss";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import { useMemo } from "react";
import { FunctionComponent } from "react";
import Avatar from './defaultComponents/image.png';
import { CardButton } from "../ui/buttons/card-button/card-button";
import { ActiveApplicationIcon } from "../ui/icons/icons";
import { CompletedApplicationIcon } from "../ui/icons/icons";
import { ApplicationMapIcon } from "../ui/icons/icons";
import { Button } from "../ui/buttons/Button";
import { SettingIcon } from "../ui/icons/icons";

const UserCard = () => {
  const onDelete = (id: string | undefined) => {
  };
  return (
    <div className={styles.background}>
      <div className={styles.border}>
        <img className={styles.avatar} src={Avatar}/>
        <p>Иванов Иван Иванович</p>
        <p>ID 112233</p>
        <p>Тел.: +7(000)000-00-00</p>
        <p>О себе: Я люблю музыку, книги и кошек</p>
        <Button animated='wheel' type='button' />
      </div>
      <div className={styles.buttonBox}>
      <CardButton icon={<ApplicationMapIcon type={"white"} />} display={"web"} children='Карта заявок'></CardButton>
      <CardButton icon={<ActiveApplicationIcon type={"white"} />} display={"web"} children='Активные заявки'></CardButton>
      <CardButton icon={<CompletedApplicationIcon type={"white"} />} display={"web"} children='Завершенные заявки'></CardButton>
      </div>
    </div>
  );
};  

export default UserCard;
