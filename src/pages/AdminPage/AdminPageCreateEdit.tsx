import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import styles from './AdminPage.module.scss'
import UserCard from "../../components/user-card/UserCard"
import SideNavigation from "../../components/side-navigation/SideNavigation"
import AdminConfirmationCardList from "../../components/admin-confirmation-card-list/AdminConfirmationCardList"
import { user } from "../../data/user"
import { TUser } from "../../types"

export const AdminPageCreateEdit = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.CreateEdit);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const [adminConfirmationCards, setAdminConfirmationCards] = useState<TUser[]>(Array.from({ length: 9 }, (_, i) => ({...user, id: user.id+i})));

    return (
        <main className={styles.main}>
            <aside className={`${styles.aside} ${styles.aside_confirmationPage}`}>
                <UserCard {...user} />
                <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
            </aside>
            <section className={`${styles.cards} ${styles.cards_confirmationPage}`}>
                <PageTitleFilter item={active}/>
                <AdminConfirmationCardList {...adminConfirmationCards} />
                
            </section>
        </main>
    )
}