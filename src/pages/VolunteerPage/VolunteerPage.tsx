import { FC, useState } from 'react'
import { PageTitleFilter } from '../../components/PageTitleFilter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/PageTitleFilter/types'
import RequestList from '../../components/RequestList/RequestList'
import SideNavigation from '../../components/SideNavigation/SideNavigation'
import './VolunteerPage.scss'

import { Maps } from '../../components/Maps/Maps'

import UserCard from '../../components/UserCard/UserCard'
import { user } from '../../data/user'
import { TRequest } from '../../types'
import DropdownMenu from '../../components/Dropdown/Dropdown'
import FilterMap from '../../components/Filters/FilterMap/FilterMap'



const VolunteerPage: FC<{ current?: EPageTitleFilterKind }> = (item) => {

  const [navArray,] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

  const [requests,] = useState<TRequest[]>([{
    id: 1,
    category: "категория",
    date: "24.10.2022",
    time: "16:00",
    address: "ул. Потолочного д. 9",
    title: "Заголовок",
    content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
    bulls: 3,
    user: user

  },
  {
    id: 2,
    category: "категория",
    date: "24.10.2022",
    time: "16:00",
    address: "ул. Потолочного д. 9",
    title: "Заголовок",
    content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
    bulls: 3,
    user: user

  },
  {
    id: 3,
    category: "категория",
    date: "24.10.2022",
    time: "16:00",
    address: "ул. Потолочного д. 9",
    title: "Заголовок",
    content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
    bulls: 3,
    user: user

  },
  {
    id: 4,
    category: "категория",
    date: "24.10.2022",
    time: "16:00",
    address: "ул. Потолочного д. 9",
    title: "Заголовок",
    content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
    bulls: 3,
    user: user

  },
  ]);





  const [active, setActive] = useState<EPageTitleFilterKind>(item.current ? item.current : EPageTitleFilterKind.Active);

  const onClick = (viewType: EPageTitleFilterKind) => {
    setActive(viewType);
  }
  const rightPanel = () => {
    if (active === EPageTitleFilterKind.Map)
      return Maps();
    else
      return RequestList(requests);
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='volonteerMainPanel'>

      <div className='volonteerLeftPanel'>
        <UserCard {...user} />
        <SideNavigation
            items={navArray}
            onClick={onClick}
            activeLink={active}
            map='/mapVolunteer'
            completed='/completedVolunteer'
            active='/activeVolunteer'
        />
      </div >



      <section className='volonteerRightPanel'>
        <div className='relative'>
          <PageTitleFilter item={active} onFilterClicked={() => setIsOpen(!isOpen)}></PageTitleFilter>
          <DropdownMenu onClose={() => setIsOpen(false)} isOpen={isOpen}>
            {isOpen && <FilterMap onSubmit={function (): void {

            }} />}
          </DropdownMenu>
        </div>
        {rightPanel()}

      </section>
    </section >
  )
}

export default VolunteerPage
