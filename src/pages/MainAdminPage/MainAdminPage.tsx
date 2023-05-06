import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import styles from './MainAdminPage.module.scss'
import UserCard from "../../components/userCard/userCard"
import SideNavigation from "../../components/side-navigation/SideNavigation"
import UserConfirmationCardList from "../../components/user-confirmation-card-list/user-confirmation-card-list"
import { user } from "../../data/user"
import { TUser } from "../../types"

export const MainAdminPage = () => {
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
                {UserCard(user)}
                {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
            </aside>
            <section className={styles.cards}>
                <PageTitleFilter item={active}/>
                {UserConfirmationCardList(confirmationCards)}
                
            </section>
        </main>
    )
}
