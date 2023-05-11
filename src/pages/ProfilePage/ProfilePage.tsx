import { useState } from 'react'
import { EPageTitleFilterKind } from '../../components/page-title-filter/types'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './ProfilePage.scss'
import UserCard from '../../components/user-card/UserCard'
import { useNavigate } from 'react-router-dom'
import { user } from '../../data/user'
import { IAvatarProps } from '../../components/avatar/Avatar'

const ProfilePage = () => {

  const [navArray] = useState<EPageTitleFilterKind[]>(
    [EPageTitleFilterKind.Map, EPageTitleFilterKind.Active, EPageTitleFilterKind.Completed]);

  const [active,] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Active);

  const navigate = useNavigate()
  const onClick = (viewType: EPageTitleFilterKind) => {
    navigate('/volunteer');

  }
  const avatarParams: IAvatarProps = {
    size: 175,
    url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg',
  }
  return (
    <section className='mainPanel'>
      <div className='leftPanel'>
        {UserCard(user, avatarParams)}
        {SideNavigation({ items: navArray, onClick: onClick, activeLink: active, map: '/mapVolunteer', completed: '/completedVolunteer', active: '/activeVolunteer' })}

      </div>
    </section>
  )
}

export default ProfilePage;
