import React, { FC } from 'react';
import './request-list.scss';
import { TRequest } from '../request/types'
import { Request } from '../request/Request'

export const RequestList: FC<Array<TRequest>> = (items) => {

  return (
    <div className='list'>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><Request  {...item} />{index < Object.values(items).length - 1 && <div className='itemBreaker' />}</div>))}
    <div className='blur'/>
    </div>

  )
}

export default RequestList;
