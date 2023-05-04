import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import RequestList from "../../components/request-list/RequestList"
import recipient from './RecipientPage.module.scss'
import { TRequest } from "../../components/request/types"
import UserCard from "../../components/userCard/userCard"
import { TUser } from "../../components/userCard/types"
import { IAvatarProps } from "../../components/avatar/Avatar"
import SideNavigation from "../../components/side-navigation/SideNavigation"
import NewApplication from "../../components/new-application/NewApplication"

export const RecipientPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Active);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const user: TUser = {
        id: 112233,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)000-00-00',
        about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
        balls: 2500,
        keys: 1,
        finishedApplications: 150,
        status: 'recipient',
    }

    const [requests, setRequests] = useState<TRequest[]>([
    ]);

    const avatarParams: IAvatarProps = {
        size: 175,
        url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
    }

    return (
        <main className={recipient.main}>
            <aside className={recipient.aside}>
                {UserCard(user, avatarParams)}
                {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
            </aside>
            <section className={recipient.requests}>
                <PageTitleFilter item={active} />
                {active === EPageTitleFilterKind.Active && NewApplication(requests)}
                {requests.length > 0 && RequestList(requests)}
            </section>
        </main>
    )
}