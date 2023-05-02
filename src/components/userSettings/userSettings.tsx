import styles from './userSettings.module.scss'
import Avatar from '../userCard/defaultComponents/image.png';
import Input from '../ui/Input/Input';
import { Button } from '../ui/buttons/Button';

export const user: TUser = {
  id: 112233,
  name: 'Иванов Иван Иванович',
  phone: '+7(000)000-00-00',
  about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
  image: `${Avatar}`,
  balls: 2500,
  keys: 1,
  finishedApplications: 150,
  status: 'admin'
}

interface TUser {
  id: number;
  name: string;
  phone: string | null;
  about: string;
  image: string;
  balls: number;
  keys: number;
  finishedApplications: number;
  status: 'admin' | 'volunteer' | 'recipient';
}

const UserSettings  = () => {
  return (
    <div className={styles.setWindow}>
      <div className={styles.avatarBlock}>
        <img className={styles.avatar} src={user.image}/>
        <button className={styles.avaChange}>Изменить фото</button>
      </div>
      <div className={styles.info}>
        <Input typeInput={'userInfoName'}/>
        <Input typeInput={'userInfoPhone'}/>
      </div>
      <div>
        <Button theme={'dark'} type={'submit'} variant={'text'} extraClass={styles.buttonWidth}>Сохранить</Button>
        <Button theme={'light'} type={'submit'} variant={'text'} extraClass={styles.buttonExit}>Выход</Button>
      </div>
    </div>
  );
};  

export default UserSettings;