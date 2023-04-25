import './SideNavLink.scss'
import { Link } from "react-router-dom"

interface ISideNavLink {
  path: string
  type: 'map' | 'active' | 'completed' | 'approve' | 'statistics' | 'create'
  visible: boolean
}

export default function SideNavLink({path, type, visible}: ISideNavLink) {

  let text = ''

  switch (type) {
    case 'map':
      text = 'Карта заявок'
      break;
    case 'active':
      text = 'Активные заявки'
      break;
    case 'completed':
      text = 'Завершённые заявки'
      break;
    case 'approve':
      text = 'Подтверждение / Блокировка'
      break;
    case 'statistics':
      text = 'Статистика'
      break;
    case 'create':
      text = 'Создание / Редактирование заявки'
      break;
    default:
      break;
  }

  return (
    <>
      {visible && 
      <div className='nav_link'>
        {/* <Link to={path} className='nav_link'> */}
          <div className={`nav_link_image nav_link_image_${type}`}/>
          <p className='nav_link_text'>{text}</p>
        {/* </Link> */}
      </div>
      }
    </>
  )
} 