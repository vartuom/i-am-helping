import React, { FC } from 'react';
import UserConfirmationCard from '../user-confirmation-card/user-confirmation-card';
import { TUser } from '../userCard/types';
import styles from './user-confirmation-card-list.module.scss'

export const UserConfirmationCardList: FC<Array<TUser>> = (items) => {

  return (
    <div className={styles.list}>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><UserConfirmationCard  {...item} /></div>))}
      <div className={styles.blur} />
    </div>

  )
}

export default UserConfirmationCardList;