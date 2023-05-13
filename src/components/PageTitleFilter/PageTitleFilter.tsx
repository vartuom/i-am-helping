import { FC, useState } from 'react';
import './PageTitleFilter.scss';
import { EPageTitleFilterKind, TPageTitleFilter } from './types'
import { ActiveApplicationIcon } from '../UI/Icons/ActiveApplicationIcon/ActiveApplicationIcon'
import { ApplicationMapIcon } from '../UI/Icons/ApplicationMapIcon/ApplicationMapIcon'
import { CompletedApplicationIcon } from '../UI/Icons/CompletedApplicationIcon/CompletedApplicationIcon'
import { AcceptBlockIcon } from '../UI/Icons/AcceptBlockIcon/AcceptBlockIcon'
import { StatisticsIcon } from '../UI/Icons/StatisticsIcon/StatisticsIcon'
import { CreateEditIcon } from '../UI/Icons/CreateEditIcon/CreateEditIcon'
import { FilterIcon } from '../UI/Icons/FilterIcon/FilterIcon'
import Modal from '../Modal/Modal';
import FilterMap from '../Filters/FilterMap/FilterMap';
import { TIconProps } from '../UI/Icons/utils';

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
  const onClose = () => {

    setFilterOpened(false);
    console.log("filterOpened");
  }
  return (
    <div className='box'>
      {filterOpened && <Modal children={<FilterMap onSubmit={onClose} />} onClose={onClose} isModalOpened={true} ></Modal>}

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

