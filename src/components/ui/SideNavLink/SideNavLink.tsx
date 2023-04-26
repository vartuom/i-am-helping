import './SideNavLink.scss'

interface ISideNavLink {
  type: 'map' | 'active' | 'completed' | 'approve' | 'statistics' | 'create' | 'contacts' | 'message'
  visible: boolean
}

export default function SideNavLink({type, visible}: ISideNavLink) {

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
    case 'contacts':
      text = 'Контакты'
      break;
    case 'message':
      text = 'Напишите нам'
      break;
    default:
      break;
  }

  return (
    <>
      {visible && 
      <div className='nav_link'>
        <div className={`nav_link_image nav_link_image_${type}`}/>
        <p className='nav_link_text'>{text}</p>
      </div>
      }
    </>
  )
} 