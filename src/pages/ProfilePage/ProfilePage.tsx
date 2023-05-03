import { useState } from 'react'
import { PageTitleFilter } from '../../components/page-title-filter/PageTitleFilter'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import RequestList from '../../components/request-list/RequestList'
import { TRequest } from '../../components/request/types'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './ProfilePage.scss'
import UserCard, { user } from '../../components/userCard/userCard'
import { IAvatarProps } from '../../components/avatar/Avatar'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {


  const avatarParams: IAvatarProps = {
    size: 175,
    url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
  }
  const [navArray] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

  const navigate = useNavigate()
  const onClick = (viewType: EPageTitleFilterKind) => {
    navigate('/volunteer');

  }
  return (
    <section className='mainPanel'>
      <div className='leftPanel'>
        {UserCard(user, avatarParams)}
        {SideNavigation({ items: navArray, onClick: onClick })}

      </div>
    </section>
  )
}

export default ProfilePage;
