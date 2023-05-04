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
import UserConfirmationCardList from "../../components/user-confirmation-card-list/user-confirmation-card-list"

export const AdminPage = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Acceptation);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    const user: TUser = {
        id: 1,
        IDnumber: 1111114,
        name: 'Петров Петр Петрович',
        phone: '+7(000)000-00-00',
        about: 'Я люблю музыку, книги и кошек',
        balls: 2500,
        keys: 1,
        finishedApplications: 150,
        status: 'admin',
        confirmation: 'green',
    }
    

    const avatarParams: IAvatarProps = {
        size: 175,
        url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
    }

    const [confirmationCards, setConfirmationCards] = useState<TUser[]>([
    {
      id: 1,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 1,
      finishedApplications: 150,
      status: 'volunteer',
      confirmation: 'green',
      about: '',
    },
    {  
      id: 2,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 0,
      keys: 0,
      finishedApplications: 0,
      status: 'volunteer',
      confirmation: 'orange',
      about: '',
    },
    {  
      id: 3,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 0,
      finishedApplications: 100,
      status: 'volunteer',
      confirmation: 'grey',
      about: '',
    },
    {
      id: 4,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 1,
      finishedApplications: 150,
      status: 'volunteer',
      confirmation: 'green',
      about: '',
    },
    {  
      id: 5,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 0,
      keys: 0,
      finishedApplications: 0,
      status: 'volunteer',
      confirmation: 'orange',
      about: '',
    },
    {  
      id: 6,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 0,
      finishedApplications: 100,
      status: 'volunteer',
      confirmation: 'grey',
      about: '',
    },
    {
      id: 7,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 1,
      finishedApplications: 150,
      status: 'volunteer',
      confirmation: 'green',
      about: '',
    },
    {  
      id: 8,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 0,
      keys: 0,
      finishedApplications: 0,
      status: 'volunteer',
      confirmation: 'orange',
      about: '',
    },
    {  
      id: 9,
      name: "Петров Петр Петрович",
      IDnumber: 1111114,
      phone: "+7(000) 000-00-00",
      balls: 2500,
      keys: 0,
      finishedApplications: 100,
      status: 'volunteer',
      confirmation: 'grey',
      about: '',
    },
    ]);

    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                {UserCard(user, avatarParams)}
                {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
            </aside>
            <section className={styles.requests}>
                <PageTitleFilter item={active}/>
                {UserConfirmationCardList(confirmationCards)}
                
            </section>
        </main>
    )
}
