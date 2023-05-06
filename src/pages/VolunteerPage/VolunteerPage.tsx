import { useState } from 'react'
import { PageTitleFilter } from '../../components/page-title-filter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import RequestList from '../../components/request-list/RequestList'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './VolunteerPage.scss'
import UserCard from '../../components/userCard/userCard'
import { user } from '../../data/user'
import { request } from '../../data/request'
import { TRequest } from '../../types'

const VolunteerPage = () => {

  const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);
  const [requests, setRequests] = useState<TRequest[]>(Array.from({ length: 9 }, (_, i) => ({...request, id: request.id+i})));

  const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Active);
  const onClick = (viewType: EPageTitleFilterKind) => {
    setActive(viewType);

  }
  return (
    <section className='volonteerMainPanel'>
      <div className='volonteerLeftPanel'>
        {UserCard(user, 175)}
        {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
      </div>

      <section className='volonteerRightPanel'>
        <PageTitleFilter item={active}></PageTitleFilter>
        {RequestList(requests)}
      </section>
    </section>
  )
}

export default VolunteerPage
