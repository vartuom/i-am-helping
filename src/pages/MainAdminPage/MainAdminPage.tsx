import { useState } from "react"
import { PageTitleFilter } from "../../components/PageTitleFilter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/PageTitleFilter/types"
import styles from './MainAdminPage.module.scss'
import UserCard from "../../components/UserCard/UserCard"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import AdminConfirmationCardList from "../../components/AdminConfirmationCardList/AdminConfirmationCardList"
import { user } from "../../data/user"
import { TUser } from "../../types"

export const MainAdminPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Acceptation);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const [adminConfirmationCards, setAdminConfirmationCards] = useState<TUser[]>(Array.from({ length: 9 }, (_, i) => ({...user, id: user.id+i})))

    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                <UserCard {...user} />
                <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
            </aside>
            <section className={styles.cards}>
                <PageTitleFilter item={active}/>
                <AdminConfirmationCardList {...adminConfirmationCards} />
            </section>
        </main>
    )
}
