import { Avatar } from '../../components/avatar/Avatar'
import NewApplication from '../../components/new-application/NewApplication'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './PersonalPage.scss'

const PersonalPage = () => {
  
  return (
    <main className="main">
      <section className='personalInfo'>Личные данные
        <Avatar url='https://fraguru.com/mdimg/avatariru/m.298472.jpg' size={160}/>
        <div className='card'>
          Карточка
        </div>
        <SideNavigation />
      </section>
      <section className='applicationsInfo'>
        <div className='personalNav'>Personal Navigation</div>
        <div className='newApplication'>
          <NewApplication />
        </div>
      </section>
    </main>
  )
}

export default PersonalPage