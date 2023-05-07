import { FC, useState } from 'react'
import { PageTitleFilter } from '../../components/page-title-filter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import RequestList from '../../components/request-list/RequestList'
import { TRequest } from '../../components/request/types'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './VolunteerPage.scss'
import UserCard, { user } from '../../components/userCard/userCard'
import { IAvatarProps } from '../../components/avatar/Avatar'
import { Maps } from '../../components/maps/Maps'


const VolunteerPage: FC<{ current?: EPageTitleFilterKind }> = (item) => {

  const avatarParams: IAvatarProps = {
    size: 175,
    url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
  }
  const [navArray,] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);
  const [requests,] = useState<TRequest[]>([{
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

  },
  ]);



  const [active, setActive] = useState<EPageTitleFilterKind>(item.current ? item.current : EPageTitleFilterKind.Active);

  const onClick = (viewType: EPageTitleFilterKind) => {
    setActive(viewType);

  }
  const rightPanel = () => {
    if (active === EPageTitleFilterKind.Map)
      return Maps();
    else
      return RequestList(requests);
  }
  return (
    <section className='volonteerMainPanel'>

      <div className='volonteerLeftPanel'>
        {UserCard(user, avatarParams)}
        {SideNavigation({ items: navArray, onClick: onClick, activeLink: active, map: '/mapVolunteer', completed: '/completedVolunteer', active: '/activeVolunteer' })}
      </div>

      <section className='volonteerRightPanel'>
        <PageTitleFilter item={active}></PageTitleFilter>
        {rightPanel()}
      </section>
    </section>
  )
}

export default VolunteerPage
