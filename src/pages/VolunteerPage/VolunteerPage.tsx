import { useState } from 'react'
import { PageTitleFilter } from '../../components/page-title-filter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import RequestList from '../../components/request-list/RequestList'
import { TRequest } from '../../components/request/types'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './VolunteerPage.scss'
import UserCard, { user } from '../../components/userCard/userCard'
import { IAvatarProps } from '../../components/avatar/Avatar'

const VolunteerPage = () => {


  const avatarParams: IAvatarProps = {
    size: 175,
    url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
  }
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

  const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Active);
  const onClick = (viewType: EPageTitleFilterKind) => {
    setActive(viewType);

  }
  return (
    <section className='volonteerMainPanel'>
      <div className='volonteerLeftPanel'>
        {UserCard(user, avatarParams)}
        {SideNavigation({ items: navArray, onClick: onClick })}

      </div>

      <section className='volonteerRightPanel'>
        <PageTitleFilter item={active}></PageTitleFilter>
        {RequestList(requests)}
      </section>
    </section>
  )
}

export default VolunteerPage
