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
  console.log(kind);
  switch (kind) {
    case EPageTitleFilterKind.Active: {
      return (<ActiveApplicationIcon />);
    }
    case EPageTitleFilterKind.Map: {
      return (<ActiveApplicationIcon />);
    }
    case EPageTitleFilterKind.Completed: {
      return (<CompletedApplicationIcon />);
    }
    case EPageTitleFilterKind.Acceptation: {
      return (<AcceptBlockIcon />);
    }
    case EPageTitleFilterKind.Statistics: {
      return (<StatisticsIcon />);
    }
    case EPageTitleFilterKind.CreateEdit: {
      return (<CreateEditIcon />);
    }
    default: {
      return (<ActiveApplicationIcon />);
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
      <div className='reqFilter'>
        <div className='reqFilterText'>
          Фильтр
        </div>
        <div className='reqFilterImg'>
          {<FilterIcon />}
        </div>

      </div>
    </div>

  )
}

