import styles from "./userCard.module.scss";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import { useMemo } from "react";
import { FunctionComponent } from "react";
import Avatar from './defaultComponents/image.png'

const UserCard = () => {
  const onDelete = (id: string | undefined) => {
  };
  return (
    <div className={styles.background}>
      <div className={styles.border}>
        <img className={styles.avatar} src={Avatar}/>
      </div>
      <div className={styles.buttonBox}>

      </div>
    </div>
  );
};  

export default UserCard;
