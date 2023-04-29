import styles from './userCard.module.scss';
import { FC } from 'react';
import Avatar from './defaultComponents/image.png';
import { Button } from '../ui/buttons/Button';
import { BallsIcon } from '../ui/icons/icons';
import { FinishedApplicationIcon } from '../ui/icons/icons';
import { KeyIcon } from '../ui/icons/icons';
import { TUser } from './types';

export const user: TUser = {
    id: 112233,
    name: 'Иванов Иван Иванович',
    phone: '+7(000)000-00-00',
    about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
    image: `${Avatar}`,
    balls: 2500,
    keys: 1,
    finishedApplications: 150,
    status: 'admin',
}


const UserCard: FC<TUser> = (user: TUser) => {
  return (
    <div className={styles.background}>
      <div className={styles.border}>
        <img className={styles.avatar} src={user.image}/>
        <div className={styles.about}>
          <p className={styles.aboutName}>{user.name}</p>
          <p className={styles.aboutId}>ID {user.id}</p>
          <div className={styles.aboutDescription}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>{user.phone}</p>
            <p className={styles.aboutMe}>О себе:</p>
            <p className={styles.aboutContact}>{user.about}</p>
          </div>
        </div>
        <div className={styles.progress}>
            <BallsIcon type={'white'} />
            <p className={styles.progressNumber}>{user.balls}</p>
            <KeyIcon />
            <p className={styles.progressNumber}>{user.keys}</p>
            <FinishedApplicationIcon />
            <p className={styles.progressNumber}>{user.finishedApplications}</p>
        </div>
        <div className={styles.button}>
          <Button animated='wheel' type='button' />
        </div>
      </div>
    </div>
  );
};  

export default UserCard;