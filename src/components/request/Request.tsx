import React, { FC } from 'react';
import './request.scss';
import { TRequest } from './types'

export const Request: FC<TRequest> = (item: TRequest) => {
  return (
    <div className='main'>

      <div className='category'>
        {item.category}
      </div>
      <div className='date'>
        <div className='dateImg'>

        </div>
        <div className='dateText'>
          {item.date}
        </div>
      </div>
      <div className='wrapperTimeAddress'>
        <div className='time'>
          <div className='timeImg'>

          </div>
          <div className='timeText'>
            {item.time}
          </div>
        </div >
        <div className='address'>
          <div className='addressImg'>

          </div>
          <div className='addressText'>
            {item.address}
          </div>
        </div>

      </div>

      <div className='contentHeader'>
        {item.title}
      </div>

      <div className='contentTextWrapper'>

        <div className='contentText'>
          {item.content}
        </div>
        <div className='contentRead'>
          <a className='link' href='#'>Читать</a>
        </div>
      </div>
      <div className='contentBalls'>
        <div className='contentBallsImg'>

        </div>
        <div className='contentBallsCount'>
          {item.bulls}
        </div>
      </div >

      <div className='person'>
        <div className='personImg'>
        </div>

        <div className='personName'>
          {item.person_name}
        </div>
        <div className='personPhone'>
          {item.phone}
        </div>
        <div className='personContact'>
          <div className='personCall'>

          </div>
          <div className='personChat'>

          </div>
        </div>
      </div>

      <div className='button'>

        <div className='buttonClose' />
        {item.is_approvable && <div className='buttonApprove' />}
      </div>
    </div>


  )
}

