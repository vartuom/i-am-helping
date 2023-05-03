import React, { FC } from 'react';
import './request.scss';
import { CalendarIcon } from '../ui/icons/calendar-icon/calendar-icon'
import { ClockIcon } from '../ui/icons/clock-icon/clock-icon'
import { LocationIcon } from '../ui/icons/location-icon/location-icon'
import { BallsIcon } from '../ui/icons/balls-icon/balls-icon'
import { PhoneIcon } from '../ui/icons/phone-icon/phone-icon'
import { MessageIcon } from '../ui/icons/message-icon/message-icon'
import { CrossIcon } from '../ui/icons/cross-icon/cross-icon';
import { ApproveIcon } from '../ui/icons/approve-icon/approve-icon';
import { TRequest } from './types'
import { Avatar } from '../avatar/Avatar';

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
        <Avatar size={100} url={"https://fraguru.com/mdimg/avatariru/m.298472.jpg"} />
        <div className='personName'>
          {item.person_name}
        </div>
        <div className='personPhone'>
          {item.phone}
        </div>
        <div className='personContact'>
          <div className='personCall'
            onClick={(event: React.MouseEvent<HTMLDivElement>) => { item.onCallClicked!(item.id) }}>
            <PhoneIcon className='ICO' type='white' />
          </div>
          <div className='personChat' onClick={(event: React.MouseEvent<HTMLDivElement>) => { item.onChatClicked!(item.id) }}>

            <MessageIcon className='ICO' type='white' />
          </div>
        </div>
      </div>

      <div className='button'>

        <div className='buttonClose'
          onClick={(event: React.MouseEvent<HTMLDivElement>) => { item.onDeleteClicked!(item.id) }}>
          <CrossIcon className='ICO' type='white' />
        </div>
        {item.is_approvable &&
          <div className='buttonApprove'
            onClick={(event: React.MouseEvent<HTMLDivElement>) => { item.onApproveClicked!(item.id) }}>
            <ApproveIcon className='ICO' type='white' />
          </div>}
      </div>
    </div >


  )
}

