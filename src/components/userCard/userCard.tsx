import styles from "./userCard.module.scss";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import Diagramm from "./defaultComponents/Ellipse33.png"
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
        <div className={styles.about}>
          <p className={styles.aboutName}>Иванов Иван Иванович</p>
          <p className={styles.aboutId}>ID 112233</p>
          <div className={styles.aboutDescription}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>+7(000)000-00-00</p>
            <p className={styles.aboutMe}>О себе:</p>
            <p className={styles.aboutContact}>Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек</p>
          </div>
        </div>
        <div className={styles.progress}>

        </div>
        <div className={styles.button}>
          <Button animated='wheel' type='button' />
          <img src={Diagramm} />
        </div>
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
