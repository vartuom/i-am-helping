import { FC, useState, ChangeEvent } from "react";
import { Button } from '../UI/buttons/Button';
import { Avatar } from '../Avatar/Avatar';
import { TUser } from '../../types';
import styles from './AdminConfirmationCard.module.scss';
import { SelectIconDown, SelectIconUp } from "../UI/icons/select-icon/select-icon";
import Checkbox from "../UI/checkbox/Checkbox";

interface IAdminConfirmationTypeProps {
  user: TUser,
  adminStatus:'main-admin' | 'admin',
}

const AdminConfirmationCard: FC<IAdminConfirmationTypeProps> = ({user, adminStatus}) => {

  const mainAdmin = adminStatus === 'main-admin';
  const categories = [{ id: 1, value: 'Подтверждать аккаунты' }, { id: 2, value: 'Создавать заявки' }, { id: 3, value: 'Раздавать ключи' }];
  
  const [filterState, setFilter] = useState({ category: [categories[0].value] });
  const [isOpen, setIsOpen] = useState(false);

  const [currentIcon, setCurrentIcon] = useState(<SelectIconDown />);

  const handleCheckboxClick = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    const array = filterState.category;
    if (array.indexOf(evt.target.name) < 0) {
      array.push(evt.target.name);
      setFilter({ ...filterState, category: array });
    }
    else {
      setFilter({ ...filterState, category: array.filter(value => value !== evt.target.name) });
    }
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setCurrentIcon(currentIcon.type === SelectIconUp ? <SelectIconDown /> : <SelectIconUp />);
  };

  return (
    <>
      { mainAdmin ?
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
            </div>
            <div className={styles.line}></div>
            <Button 
              type="button" 
              icon={currentIcon}
              extraClass={styles.selectIcon} 
              onClick={handleButtonClick}  
            />
            { isOpen &&
              <ul className={styles.d_flex + ' ' + styles.column}>
                {categories.length > 1 && categories.map((el, i) => {
                  return <li className={styles.check_padding} key={el.id}><Checkbox name={el.value} label={el.value} handleChange={handleCheckboxClick} isChecked={filterState.category.indexOf(el.value) >= 0} /></li>
                })}
              </ul>
            }
          </div>
        </li>) : 
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
            </div>
          </div>
        </li>)
      }
    </>
  )
}

export default AdminConfirmationCard