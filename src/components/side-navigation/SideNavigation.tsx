import SideNavLink from '../ui/SideNavLink/SideNavLink';
import './SideNavigation.scss'

export default function SideNavigation() {

  return (
    <nav className="nav">
      <SideNavLink path='/map' type='map' visible />
      <SideNavLink path='/active' type='active' visible />
      <SideNavLink path='/completed' type='completed' visible />
      <SideNavLink path='/approve' type='approve' visible />
      <SideNavLink path='/statistics' type='statistics' visible />
      <SideNavLink path='/create' type='create' visible />
    </nav>
  )
}