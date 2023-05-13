import { useState } from "react"
import { PageTitleFilter } from "../../components/PageTitleFilter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/PageTitleFilter/types"
import styles from './AdminPage.module.scss'
import UserCard from "../../components/UserCard/UserCard"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import UserConfirmationCardList from "../../components/UserConfirmationCardList/UserConfirmationCardList"
import { user } from "../../data/user"
import { TUser } from "../../types"

export const AdminPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Acceptation);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }
    
    const [confirmationCards, setConfirmationCards] = useState<TUser[]>(Array.from({ length: 9 }, (_, i) => ({...user, id: user.id+i})))
    
    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                <UserCard {...user} />
                <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
            </aside>
            <section className={styles.cards}>
                <PageTitleFilter item={active}/>
                <UserConfirmationCardList {...confirmationCards}/>

            </section>
        </main>
    )
}
