import React, { FC } from 'react';
import UserConfirmationCard from '../UserConfirmationCard/UserConfirmationCard';
import styles from './UserConfirmationCardList.module.scss'
import useMediaQuery from '../../hooks/useMediaQuery';
import { TUser } from '../../types';

const UserConfirmationCardList: FC<Array<TUser>> = (items) => {

  const displayType = useMediaQuery('(min-width: 415px)') ? 'desktop' : 'mobile';

  return (
    <div className={styles.list}>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><UserConfirmationCard user={item} displayType={displayType} /></div>))}
      {/* Чтобы включить блюр внизу странцы, раскомментируй строку ниже */}
      {/* <div className={styles.blur} /> */}
    </div>

  )
}

export default UserConfirmationCardList;