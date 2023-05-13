import styles from './UserCard.module.scss';
import { FC } from 'react';
import { Button } from '../UI/buttons/Button';
import { BallsIcon, DiagramIcon } from '../UI/icons/icons';
import { FinishedApplicationIcon } from '../UI/icons/icons';
import { KeyIcon } from '../UI/icons/icons';
import { Avatar } from '../Avatar/Avatar';
import { TUser } from '../../types';

const UserCard: FC<TUser> = (user: TUser) => {
  return (
    <div className={styles.background}>
      <div className={styles.border}>
        <Avatar size={175} url={user.avatar} isUserCard={true}/>
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