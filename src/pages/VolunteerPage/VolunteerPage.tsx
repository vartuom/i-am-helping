import { useState } from 'react'
import { PageTitleFilter } from '../../components/page-title-filter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import RequestList from '../../components/request-list/RequestList'
import { TRequest } from '../../components/request/types'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './VolunteerPage.scss'
import UserCard, { user } from '../../components/userCard/userCard'

const VolunteerPage = () => {

  const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);
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
    is_approvable: true

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
    is_approvable: true

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
    is_approvable: true

  },
  ]);

  return (
    <section className='mainPanel'>
      <div className='leftPanel'>
        {UserCard(user)}
        {SideNavigation({items: navArray})}

      </div>

      <section className='rightPanel'>
        <PageTitleFilter item={EPageTitleFilterKind.Active}></PageTitleFilter>
        {RequestList(requests)}
      </section>
    </section>
  )
}

export default VolunteerPage
