import React, { FC, useState } from 'react';
import './PageTitleFilter.scss';
import { EPageTitleFilterKind, TPageTitleFilter } from './types'

import Modal from '../Modal/Modal';
import { ActiveApplicationIcon, ApplicationMapIcon, CompletedApplicationIcon, AcceptBlockIcon, StatisticsIcon, CreateEditIcon, FilterIcon } from '../UI/Icons/icons';
import { TIconProps } from '../UI/Icons/utils';
import FilterMap from '../Filters/FilterMap/FilterMap';

export const getTitleImg = (kind: EPageTitleFilterKind, type: TIconProps = { type: 'blue' }) => {
  switch (kind) {
    case EPageTitleFilterKind.Active: {
      return (<ActiveApplicationIcon type={type.type} className='reqTypeIcon' />)
    }
    case EPageTitleFilterKind.Map: {
      return (<ApplicationMapIcon type={type.type} className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Completed: {
      return (<CompletedApplicationIcon type={type.type} className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Acceptation: {
      return (<AcceptBlockIcon type={type.type} className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Statistics: {
      return (<StatisticsIcon type={type.type} className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.CreateEdit: {
      return (<CreateEditIcon type={type.type} className='reqTypeIcon' />);
    }
    default: {
      return (<ActiveApplicationIcon type={type.type} className='reqTypeIcon' />);
    }
  }
}

export const PageTitleFilter: FC<TPageTitleFilter> = (item: TPageTitleFilter) => {
  const [filterOpened, setFilterOpened] = useState<boolean>(false);
  const OnClose = () => {

    setFilterOpened(false);
    console.log("filterOpened");
  }
  return (
    <div className='box'>
      {filterOpened && <Modal children={<FilterMap onSubmit={OnClose} />} onClose={OnClose} isModalOpened={true} ></Modal>}

      <div className='reqType'>

        {(getTitleImg(item.item))}

        <div className='reqTypeText'>
          {item.item.valueOf()}
        </div>
      </div>
      <div className='reqFilter' onClick={() => { setFilterOpened(true) }}>
        <div className='reqFilterText'>
          Фильтр
        </div>

        {<FilterIcon type='blue' className='reqFilterIcon' />}


      </div>
    </div>

  )
}

