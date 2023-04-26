import React, { FC } from 'react';
import './page-title-filter.scss';
import { EPageTitleFilterKind, TPageTitleFilter } from './types'
import { ActiveApplicationIcon } from '../ui/icons/active-application-icon/active-application-icon'
import { CompletedApplicationIcon } from '../ui/icons/completed-application-icon/completed-application-icon'
import { AcceptBlockIcon } from '../ui/icons/accept-block-icon/accept-block-icon'
import { StatisticsIcon } from '../ui/icons/statistics-icon/statistics-icon'
import { CreateEditIcon } from '../ui/icons/create-edit-icon/create-edit-icon'


import { FilterIcon } from '../ui/icons/filter-icon/filter-icon'

const getTitleImg = (kind: EPageTitleFilterKind) => {
  switch (kind) {
    case EPageTitleFilterKind.Active: {
      return (<ActiveApplicationIcon type='blue' className='reqTypeIcon' />)
    }
    case EPageTitleFilterKind.Map: {
      return (<ActiveApplicationIcon type='blue' className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Completed: {
      return (<CompletedApplicationIcon type='blue' className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Acceptation: {
      return (<AcceptBlockIcon type='blue' className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.Statistics: {
      return (<StatisticsIcon type='blue' className='reqTypeIcon' />);
    }
    case EPageTitleFilterKind.CreateEdit: {
      return (<CreateEditIcon type='blue' className='reqTypeIcon' />);
    }
    default: {
      return (<ActiveApplicationIcon type='blue' className='reqTypeIcon' />);
    }
  }
}

export const PageTitleFilter: FC<TPageTitleFilter> = (item: TPageTitleFilter) => {
  return (
    <div className='box'>

      <div className='reqType'>

        {(getTitleImg(item.item))}

        <div className='reqTypeText'>
          {item.item.valueOf()}
        </div>
      </div>
      <div className='reqFilter' onClick={item.onFilterClicked}>
        <div className='reqFilterText'>
          Фильтр
        </div>

        {<FilterIcon type='blue' className='reqFilterIcon' />}


      </div>
    </div>

  )
}

