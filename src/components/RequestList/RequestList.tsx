import React, { FC } from 'react';
import './RequestList.scss';
import { Request } from '../Request/Request'
import { TRequest } from '../../types';

export const RequestList: FC<Array<TRequest>> = (items) => {

  return (
    <div className='list'>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><Request  {...item} />{index < Object.values(items).length - 1 && <div className='itemBreaker' />}</div>))}

      <div className='blur' />
    </div>

  )
}

export default RequestList;
