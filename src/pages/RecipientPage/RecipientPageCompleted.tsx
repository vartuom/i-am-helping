import { useState } from "react"
import { PageTitleFilter } from "../../components/PageTitleFilter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/PageTitleFilter/types"
import RequestList from "../../components/RequestList/RequestList"
import recipient from './RecipientPage.module.scss'
import UserCard from "../../components/UserCard/UserCard"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import NewApplication from "../../components/NewApplication/NewApplication"
import { user } from "../../data/user"
import { request } from "../../data/request"
import { TRequest } from "../../types"

export const RecipientPageCompleted = () => {
  const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
      [EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

  const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Completed);

  const onClick = (viewType: EPageTitleFilterKind) => {
      setActive(viewType);
  }

  const [requests, setRequests] = useState<TRequest[]>(Array.from({ length: 9 }, (_, i) => ({...request, id: request.id+i})));

  return (
    <main className={recipient.main}>
      <aside className={`${recipient.aside} ${recipient.aside_activePage}`}>
          <UserCard {...user} />
          <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
      </aside>
      <section className={`${recipient.requests} ${recipient.requests_activePage}`}>
        <PageTitleFilter item={active} />
        {active === EPageTitleFilterKind.Active && <NewApplication {...requests} />}
        {requests.length > 0 && <RequestList {...requests} />}
      </section>
    </main>
  )
}