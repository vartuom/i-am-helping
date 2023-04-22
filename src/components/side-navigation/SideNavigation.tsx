import './SideNavigation.scss'
import { Link } from "react-router-dom";

export default function SideNavigation() {
  return (
    <nav className="nav">
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_map'/>
        <p className='nav_link_text'>Карта заявок</p>
      </Link>
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_active'/>
        <p className='nav_link_text'>Активные заявки</p>
      </Link>
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_completed'/>
        <p className='nav_link_text'>Завершённые заявки</p>
      </Link>
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_approve'/>
        <p className='nav_link_text'>Подтверждение / Блокировка</p>
      </Link>
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_statistics'/>
        <p className='nav_link_text'>Статистика</p>
      </Link>
      <Link to={'/map'} className='nav_link'>
        <div className='nav_link_image nav_link_image_create'/>
        <p className='nav_link_text'>Создание / Редактирование заявки</p>
      </Link>
    </nav>
  )
}