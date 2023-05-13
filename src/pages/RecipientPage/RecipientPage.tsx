import { useState } from "react"
import { PageTitleFilter } from "../../components/PageTitleFilter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/PageTitleFilter/types"
import RequestList from "../../components/RequestList/RequestList"
import recipient from './RecipientPage.module.scss'
import UserCard from "../../components/UserCard/UserCard"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import NewApplication from "../../components/NewApplication/NewApplication"
import { user } from "../../data/user"
import { TRequest } from "../../types"

export const RecipientPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Active);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const [requests, setRequests] = useState<TRequest[]>([
    ]);

    return (
        <main className={recipient.main}>
            <aside className={recipient.aside}>
                <UserCard {...user} />
                <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
            </aside>
            <section className={recipient.requests}>
                <PageTitleFilter item={active} />
                {active === EPageTitleFilterKind.Active && <NewApplication {...requests} />}
                {requests.length > 0 && <RequestList {...requests} />}
            </section>
        </main>
    )
}