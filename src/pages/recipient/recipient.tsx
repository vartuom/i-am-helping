import { useState } from "react"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import RequestList from "../../components/request-list/RequestList"
import SideNavLink from "../../components/ui/SideNavLink/SideNavLink"
import recipient from './recipient.module.scss'
import { TRequest } from "../../components/request/types"

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

    return (
        <main className={recipient.main}>
            <aside className={recipient.aside}>
                <div className={recipient.profile}>заглушка карточки</div>
                <nav className={recipient.nav}>
                    <SideNavLink path="/recipient/active" type="active" visible={true} />
                    <SideNavLink path="recipient/completed" type="completed" visible={true} />
                </nav>
            </aside>
            <div className={recipient.requests}>
                <PageTitleFilter item={EPageTitleFilterKind.Active} />
                {RequestList(requests)}
            </div>
        </main>
    )
}