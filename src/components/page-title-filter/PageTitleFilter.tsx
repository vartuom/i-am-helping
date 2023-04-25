import React, { FC } from 'react';
import './page-title-filter.scss';
import { EPageTitleFilterKind } from './types'
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
export const PageTitleFilter: FC<EPageTitleFilterKind> = (item: EPageTitleFilterKind) => {
  return (
    <div className='main'>

      <div className='title'>

        {(getTitleImg(item))}

        <div className='titleText'>
          {item.valueOf()}
        </div>
      </div>
      <div className='filter'>
        <div className='filterText'>
          Фильтр
        </div>
        <div className='filterImg'>
          {<FilterIcon />}
        </div>

      </div>
    </div>

  )
}

