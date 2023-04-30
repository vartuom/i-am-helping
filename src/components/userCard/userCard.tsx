import styles from './userCard.module.scss';
import { FC } from 'react';
import { Button } from '../ui/buttons/Button';
import { BallsIcon, DiagramIcon } from '../ui/icons/icons';
import { FinishedApplicationIcon } from '../ui/icons/icons';
import { KeyIcon } from '../ui/icons/icons';
import { Avatar, IAvatarProps } from '../avatar/Avatar';

interface TUser {
  id: number;
  name: string;
  phone: string | null;
  about: string;
  balls: number;
  keys: number;
  finishedApplications: number;
  status: 'admin' | 'volunteer' | 'recipient';
}

export const avatarParams: IAvatarProps = {
  size: 175,
  url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
}

export const user: TUser = {
  id: 112233,
  name: 'Иванов Иван Иванович',
  phone: '+7(000)000-00-00',
  about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
  balls: 2500,
  keys: 1,
  finishedApplications: 150,
  status: 'admin'
}

const UserCard: FC<TUser> = (user: TUser, avatarParams: IAvatarProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.border}>
        <Avatar size={avatarParams.size} url={avatarParams.url} isUserCard={true}/>
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
        {user.status === 'recipient' ?
          (<>
            <div className={styles.progress}>
              <div className={styles.ellipse}>
                <p className={styles.progressNumber}>1 из 5</p>
                <DiagramIcon />
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
        <div className={styles.button}>
          <Button animated='wheel' type='button' />
        </div>
      </div>
    </div>
  );
};

export default UserCard;