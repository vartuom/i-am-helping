import React, { FC, useState } from 'react';
import './Request.scss';
import { CalendarIcon } from '../UI/icons/calendar-icon/calendar-icon'
import { ClockIcon } from '../UI/icons/clock-icon/clock-icon'
import { LocationIcon } from '../UI/icons/location-icon/location-icon'
import { BallsIcon } from '../UI/icons/balls-icon/balls-icon'
import { PhoneIcon } from '../UI/icons/phone-icon/phone-icon'
import { CrossIcon } from '../UI/icons/cross-icon/cross-icon';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../UI/buttons/Button';
import { EditIcon, EmptyMessageIcon } from '../UI/icons/icons';
import { TRequest } from '../../types';


export const Request: FC<TRequest> = (item: TRequest) => {



  
  return (
    <div className='reqMain'>

    
      <div className='itemBreaker' />
      <div className='category'>
        {item.category}
      </div>
      <div className='wrapperTimeAddress'>
        <div className='date'>
          <div className='dateImg'>
            <CalendarIcon />
          </div>
          <div className='dateText'>
            {item.date}
          </div>
        </div>

        <div className='time'>
          <div className='timeImg'>
            <ClockIcon />
          </div>
          <div className='timeText'>
            {item.time}
          </div>
        </div >
        <div className='address'>
          <div className='addressImg'>
            <LocationIcon type={"blue"} />
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
        <div className='contentBallsImg' onClick={(event: React.MouseEvent<HTMLDivElement>) => { item.onBallClicked!(item.id) }}>
          <BallsIcon type='blue' className='ICO' />
        </div>
        <div className='contentBallsCount'>
          {item.bulls}
        </div>
      </div >

      <div className='person'>
        <Avatar size={100} url={item.user?.avatar} extraClass='personImg'/>
        <div className='personName'>
          {item.user?.name}
        </div>
        <div className='personPhone'>
          {item.user?.phone}
        </div>
        <div className='personContact'>
          <Button
            variant="icon"
            size="small"
            theme="dark"
            type="button"
            hasBorder={true}
            icon={<PhoneIcon type="white" />}
            onClick={() => { item.onCallClicked!(item.id) }}
          />
          <Button
            variant="icon"
            size="small"
            theme="dark"
            type="button"
            hasBorder={true}
            icon={<EmptyMessageIcon type="white" />}
            onClick={() => {
              item.onCallClicked!(item.id);
            }}
          />
        </div>
      </div>

      <div className='button-request'>
        <Button
          figure="close"
          type="button"
          icon={<CrossIcon type='white' />}
        />
        {item.isActive &&
          <Button
            figure="edit"
            type="button"
            icon={<EditIcon />}
          />
        }
      </div>
    </div >


  )
}

