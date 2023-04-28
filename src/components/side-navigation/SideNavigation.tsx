import { Link } from 'react-router-dom';
import SideNavLink from '../ui/SideNavLink/SideNavLink';
import './SideNavigation.scss'

export default function SideNavigation() {

  return (
    <nav className="side_nav">
      <Link to='/map' className='side_nav_text'>
        <SideNavLink type='map' visible />
      </Link>
      <Link to='/active' className='side_nav_text'>
        <SideNavLink type='active' visible />
      </Link>
      <Link to='/completed' className='side_nav_text'>
      <SideNavLink type='completed' visible />
      </Link>
      <Link to='/approve' className='side_nav_text'>
        <SideNavLink type='approve' visible />
      </Link>
      <Link to='/statistics' className='side_nav_text'>
        <SideNavLink type='statistics' visible />
      </Link>
      <Link to='/create' className='side_nav_text'>
        <SideNavLink type='create' visible />
      </Link>
    </nav>
  )
}