import styles from './user-confirmation-card.module.scss';
import { FC } from 'react';
//import Avatar from '../../images/avatar-admin-small.png';
import { Button } from '../ui/buttons/Button';
import { BallsIcon } from '../ui/icons/icons';
import { FinishedApplicationIcon } from '../ui/icons/icons';
import { KeyIcon } from '../ui/icons/icons';
import { Avatar } from '../avatar/Avatar';

export const user: TUser = {
  id: 11111114,
  name: 'Петров Петр Петрович',
  phone: '+7(000)000-00-04',
  about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
  image: `${Avatar}`,
  balls: 2500,
  keys: 1,
  finishedApplications: 150,
  status: 'admin'
}

interface TUser {
  id?: number;
  name?: string;
  phone?: string | null;
  about?: string;
  image?: string;
  balls?: number;
  keys?: number;
  finishedApplications?: number;
  status?: 'admin' | 'volunteer' | 'recipient';
}


const UserConfirmationCard: FC<TUser> = (user: TUser) => {
  return (
    <li className={styles.card}> 
      <div className={styles.avatar}>
        <Avatar size={62} url={"https://fraguru.com/mdimg/avatariru/m.298472.jpg"} />
      </div>

      <div className={styles.info}>

        {/* <h3 className={styles.about}>
          <p className={styles.aboutName}>{user.name}</p>
          <p className={styles.aboutId}>ID {user.id}</p>
          <div className={styles.aboutDescription}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>{user.phone}</p>
          </div>
        </h3> */}

        <div className={styles.about}>
          <h3 className={styles.aboutName}>Петров Петр Петрович</h3>
          <p className={styles.aboutId}>ID 11111114</p>
          <div className={styles.aboutDescription}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>+7(000) 000-00-04</p>
          </div>
          <div className={styles.temp}></div> 
        </div>  

            

        {/* 
        {user.status === 'recipient' ? 
        (<>
        <div className={styles.progress}>
          <div className={styles.ellipse}>
            <p className={styles.progressNumber}>1 из 5</p>
            <img src={Ellipse}/>
          </div>
        </div>
        </>) : (<></>)}
        {user.status === 'volunteer' ? 
        (<>
          <div className={styles.progress}>
            <BallsIcon type={'white'} />
            <p className={styles.progressNumber}>{user.balls}</p>
            <KeyIcon />
            <p className={styles.progressNumber}>{user.keys}</p>
            <FinishedApplicationIcon />
            <p className={styles.progressNumber}>{user.finishedApplications}</p>
        </div>
        </>) : (<></>)}
        {user.status === 'admin' ? 
        (<>
        <div className={styles.progress}>
        </div>
        </>) : (<></>)}
        <div className={styles.buttons}>
          <Button animated='wheel' type='button' />
        </div>
        */}

        <div className={styles.buttons}>
          <Button
            label="Подтвердить"
            onClick={() => {}}
            theme="dark"
            type="submit"
            variant="text"
          />
          <Button
            label="Заблокировать"
            onClick={() => {}}
            theme="light"
            type="button"
            variant="text"
          />
          <Button
            label="Дать ключи"
            onClick={() => {}}
            theme="light"
            type="button"
            variant="text"
          />
        </div>

        
      </div>
    </li>
  );
};  

export default UserConfirmationCard;