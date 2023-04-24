import { Avatar } from '../../components/avatar/avatar.component'
import NewApplication from '../../components/new-application/NewApplication'
import './PersonalPage.scss'

const PersonalPage = () => {
  
  return (
    <main className="main">
      <section className='personalInfo'>Личные данные</section>
      <Avatar url='https://fraguru.com/mdimg/avatariru/m.298472.jpg' size={160}/>
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