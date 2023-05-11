import styles from './user-confirmation-card.module.scss';
import { FC } from 'react';
import { Button } from '../ui/buttons/Button';
import { BallsIcon } from '../ui/icons/icons';
import { FinishedApplicationIcon } from '../ui/icons/icons';
import { KeyIcon } from '../ui/icons/icons';
import { Avatar } from '../avatar/Avatar';
import { ColorfulLabel, ColorfulLabelMob } from '../ui/figures/ColorfulLabel';
import { TUser } from '../../types';

interface IUserConfirmationTypeProps {
  user: TUser,
  displayType: 'desktop' | 'mobile',
}


const UserConfirmationCard: FC<IUserConfirmationTypeProps> = ({user, displayType}) => {

  const desktop = displayType === 'desktop';
  const keysCount = user.keys ?? 0;

  return (
    <>
      { desktop ?
      (<li className={styles.card}> 
        <div className={styles.avatar}>
          <Avatar size={62} url={user.avatar} />
        </div>
        <div className={styles.info}>
          <div className={styles.about}>
            <h3 className={styles.aboutName}>{user.name}</h3>
            <p className={styles.aboutId}>ID {user.id}</p>
            <div className={styles.aboutDescription}>
              <p className={styles.aboutMe}>Тел.:</p>
              <p className={styles.aboutContact}>{user.phone}</p>
            </div>

            <div className={styles.dobriki}>
              <ColorfulLabel fill = {user.confirmation === 'green' ? "#ACCA3E" : user.confirmation === 'orange' ? "#F9BC90" : "#818C99"} />
              <div className={styles.progress}>
                <BallsIcon type={'white'} />
                <p className={styles.progressNumber}>{user.balls}</p>
                {keysCount > 0 ? (
                  <>
                    <KeyIcon />
                    <p className={styles.progressNumber}>{user.keys}</p>
                  </>
                ): <p className={styles.empty}></p>}
              
                <FinishedApplicationIcon />
                <p className={styles.progressNumber}>{user.finishedApplications}</p>
              </div>
            </div>
          </div>  

          <div className={styles.buttons}>
            
            <Button
              onClick={() => {}}
              theme="light"
              type="submit"
              variant="text"
              extraClass={styles.colorTransition}
              ><span className={styles.gradient} 
                style={{ position: 'relative', zIndex: 1 }}
              >Подтвердить</span>
            </Button>
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
          <Avatar size={62} url={user.avatar} />
        </div>

        <div className={styles.label}>
          <ColorfulLabelMob fill ={user.confirmation === 'green' ? "#ACCA3E" : user.confirmation === 'orange' ? "#F9BC90" : "#818C99"} />
        </div>

        <div className={styles.infoMob}>
          <div className={styles.about}>
            <h3 className={styles.aboutNameMob}>{user.name}</h3>
            <p className={styles.aboutId}>ID {user.id}</p>
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
              onClick={() => {}}
              theme="light"
              type="submit"
              variant="text"
              extraClass={styles.colorTransition}
              ><span className={styles.gradient} 
                style={{ position: 'relative', zIndex: 1 }}
              >Подтвердить</span>
            </Button>
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