import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import RequestList from "../../components/request-list/RequestList"
import SideNavLink from "../../components/ui/SideNavLink/SideNavLink"
import recipient from './recipient.module.scss'
import { TRequest } from "../../components/request/types"
import UserCard from "../../components/userCard/userCard"
import { TUser } from "../../components/userCard/types"
import { IAvatarProps } from "../../components/avatar/Avatar"

export const RecipientPage = () => {
    const [requests, setRequests] = useState<TRequest[]>([{
        id: 1,
        category: "категория",
        date: "24.10.2022",
        time: "16:00",
        address: "ул. Потолочного д. 9",
        title: "Заголовок",
        content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
        bulls: 3,
        person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
        person_name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        is_approvable: false

    },
    {
        id: 2,
        category: "категория",
        date: "24.10.2022",
        time: "16:00",
        address: "ул. Потолочного д. 9",
        title: "Заголовок",
        content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
        bulls: 3,
        person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
        person_name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        is_approvable: false

    },
    {
        id: 3,
        category: "категория",
        date: "24.10.2022",
        time: "16:00",
        address: "ул. Потолочного д. 9",
        title: "Заголовок",
        content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
        bulls: 3,
        person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
        person_name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        is_approvable: false

    },
    {
        id: 4,
        category: "категория",
        date: "24.10.2022",
        time: "16:00",
        address: "ул. Потолочного д. 9",
        title: "Заголовок",
        content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
        bulls: 3,
        person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
        person_name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        is_approvable: false

    },
    ]);

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

    const avatarParams: IAvatarProps = {
        size: 175,
        url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
      }      

    return (
        <main className={recipient.main}>
            <aside className={recipient.aside}>
                {UserCard (user, avatarParams)}
                <nav className={recipient.nav}>
                  
                </nav>
            </aside>
            <div className={recipient.requests}>
                <PageTitleFilter item={EPageTitleFilterKind.Active} />
                {RequestList(requests)}
            </div>
        </main>
    )
}