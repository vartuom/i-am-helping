import React, { FC } from 'react';
import AdminConfirmationCard from '../AdminConfirmationCard/AdminConfirmationCard';
import styles from './AdminConfirmationCardList.module.scss'
import { TUser } from '../../types';

export const AdminConfirmationCardList: FC<Array<TUser>> = (items) => {

  const adminStatus = 'main-admin' ? 'main-admin' : 'admin';

  return (
    <div className={styles.list}>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><AdminConfirmationCard user={item} adminStatus={adminStatus} /></div>))}
      {/* Чтобы включить блюр внизу странцы, раскомментируй строку ниже */}
      {/* <div className={styles.blur} /> */}
    </div>
  )
}

export default AdminConfirmationCardList;