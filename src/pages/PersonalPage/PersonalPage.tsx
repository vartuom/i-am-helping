import NewApplication from '../../components/new-application/NewApplication'
import SideNavigation from '../../components/side-navigation/SideNavigation'
import './PersonalPage.scss'

const PersonalPage = () => {
  
  return (
    <main className="main">
      <section className='personalInfo'>
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