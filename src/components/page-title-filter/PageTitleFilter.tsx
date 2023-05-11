import React, { FC, useState } from 'react';
import './page-title-filter.scss';
import { EPageTitleFilterKind, TPageTitleFilter } from './types'
import { ActiveApplicationIcon } from '../ui/icons/active-application-icon/active-application-icon'
import { ApplicationMapIcon } from '../ui/icons/application-map-icon/application-map-icon'
import { CompletedApplicationIcon } from '../ui/icons/completed-application-icon/completed-application-icon'
import { AcceptBlockIcon } from '../ui/icons/accept-block-icon/accept-block-icon'
import { StatisticsIcon } from '../ui/icons/statistics-icon/statistics-icon'
import { CreateEditIcon } from '../ui/icons/create-edit-icon/create-edit-icon'
import { TIconProps } from "../../components/ui/icons/utils"


import { FilterIcon } from '../ui/icons/filter-icon/filter-icon'

import Modal from '../modal/Modal';
import FilterMap from '../filters/filter-map/FilterMap';

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

