import styles from './user-confirmation-card.module.scss';
import { FC } from 'react';
import { Button } from '../ui/buttons/Button';
import { BallsIcon } from '../ui/icons/icons';
import { FinishedApplicationIcon } from '../ui/icons/icons';
import { KeyIcon } from '../ui/icons/icons';
import { Avatar } from '../avatar/Avatar';
import { ColorfulLabel, ColorfulLabelMob } from '../ui/figures/colorful-label';
import useMediaQuery from '../../hooks/useMediaQuery';

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
  confirmation?: 'green' | 'orange' | 'grey';
}


const UserConfirmationCard: FC<TUser> = (user: TUser) => {

  const desktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
    { desktop ?
     (<li className={styles.card}> 
      <div className={styles.avatar}>
        <Avatar size={62} url={"https://fraguru.com/mdimg/avatariru/m.298472.jpg"} />
      </div>
      <div className={styles.info}>
        <div className={styles.about}>
          <h3 className={styles.aboutName}>{user.name}</h3>
          <p className={styles.aboutId}>{user.id}</p>
          <div className={styles.aboutDescription}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>{user.phone}</p>
          </div>

          <div className={styles.dobriki}>
            <ColorfulLabel fill = {user.confirmation === 'green' ? "#ACCA3E" : user.confirmation === 'orange' ? "#F9BC90" : "#818C99"} />
            <div className={styles.progress}>
              <BallsIcon type={'white'} />
              <p className={styles.progressNumber}>{user.balls}</p>
              <KeyIcon />
              <p className={styles.progressNumber}>{user.keys}</p>
              <FinishedApplicationIcon />
              <p className={styles.progressNumber}>{user.finishedApplications}</p>
            </div>
          </div>
        </div>  

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
    </li>)
    :(<li className={styles.cardMob}> 
      <div className={styles.avatar}>
        <Avatar size={62} url={"https://fraguru.com/mdimg/avatariru/m.298472.jpg"} />
      </div>

      <div className={styles.label}>
        <ColorfulLabelMob fill ={user.confirmation === 'green' ? "#ACCA3E" : user.confirmation === 'orange' ? "#F9BC90" : "#818C99"} />
      </div>

      <div className={styles.infoMob}>
        <div className={styles.about}>
          <h3 className={styles.aboutNameMob}>{user.name}</h3>
          <p className={styles.aboutId}>{user.id}</p>
          <div className={styles.aboutDescriptionMob}>
            <p className={styles.aboutMe}>Тел.:</p>
            <p className={styles.aboutContact}>{user.phone}</p>
          </div>
          <div className={styles.dobriki}>
            <div className={styles.progressMob}>
              <BallsIcon type={'white'} />
              <p className={styles.progressNumber}>{user.balls}</p>
              <FinishedApplicationIcon />
              <p className={styles.progressNumber}>{user.keys}</p>
              <FinishedApplicationIcon />
              <p className={styles.progressNumber}>{user.finishedApplications}</p>
            </div>
          </div>
        </div>  

        <div className={styles.buttonsMob}>
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
      
    </li>)}
    </>
  );
};  

export default UserConfirmationCard;