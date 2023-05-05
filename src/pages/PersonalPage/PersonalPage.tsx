import { useState } from 'react'
import { Avatar } from '../../components/avatar/Avatar'
import './PersonalPage.scss'
import { TRequest } from '../../components/request/types'

const PersonalPage = () => {
  const [requests, setRequests] = useState<TRequest[]>([
    
  ])

  return (
    <main className="main">
      <section className='personalInfo'>Личные данные
        <Avatar url='https://fraguru.com/mdimg/avatariru/m.298472.jpg' size={160} />
        <div className='card'>
          Карточка
        </div>

      </section>
      <section className='applicationsInfo'>
        <div className='personalNav'>Personal Navigation</div>
      </section>
    </main>
  )
}

export default PersonalPage
