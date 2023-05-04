import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import RequestList from "../../components/request-list/RequestList"
import styles from './AdminPage.module.scss'
import { TRequest } from "../../components/request/types"
import UserCard from "../../components/userCard/userCard"
import { TUser } from "../../components/userCard/types"
import { IAvatarProps } from "../../components/avatar/Avatar"
import SideNavigation from "../../components/side-navigation/SideNavigation"
import NewApplication from "../../components/new-application/NewApplication"

export const AdminPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Acceptation);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const user: TUser = {
        id: 112233,
        name: 'Петров Петр Петрович',
        phone: '+7(000)000-00-00',
        about: 'Я люблю музыку, книги и кошек',
        balls: 2500,
        keys: 1,
        finishedApplications: 150,
        status: 'admin',
    }

    const [requests, setRequests] = useState<TRequest[]>([
    ]);

    const avatarParams: IAvatarProps = {
        size: 175,
        url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
    }

    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                {UserCard(user, avatarParams)}
                {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
            </aside>
            <section className={styles.requests}>
                <PageTitleFilter item={active}/>
                
            </section>
        </main>
    )
}