import styles from './userSettings.module.scss'
import Input from '../UI/Input/Input';
import { Button } from '../UI/Buttons/Button';
import { user } from '../../data/user';
import { Avatar } from '../Avatar/Avatar';

const UserSettings = () => {
  return (
    <div className={styles.setWindow}>
      <div className={styles.avatarBlock}>
        <Avatar size={82} url={user.avatar} />
        <button className={styles.avaChange}>Изменить фото</button>
      </div>
      <div className={styles.info}>
        <Input typeInput={'userInfoName'} />
        <Input typeInput={'userInfoPhone'} />
      </div>
      <div>
        <Button theme={'dark'} type={'submit'} variant={'text'} extraClass={styles.buttonWidth}>Сохранить</Button>
        <Button theme={'light'} type={'submit'} variant={'text'} extraClass={styles.buttonExit}>Выход</Button>
      </div>
    </div>
  );
};

export default UserSettings;