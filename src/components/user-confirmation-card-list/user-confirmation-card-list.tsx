import React, { FC } from 'react';
import UserConfirmationCard from '../user-confirmation-card/user-confirmation-card';
import styles from './user-confirmation-card-list.module.scss'
import useMediaQuery from '../../hooks/useMediaQuery';
import { TUser } from '../../types';

export const UserConfirmationCardList: FC<Array<TUser>> = (items) => {

  const displayType = useMediaQuery('(min-width: 415px)') ? 'desktop' : 'mobile';

  return (
    <div className={styles.list}>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><UserConfirmationCard user={item} displayType={displayType} /></div>))}
      <div className={styles.blur} />
    </div>

  )
}

export default UserConfirmationCardList;