import SideNavLink from '../ui/SideNavLink/SideNavLink';
import './SideNavigation.scss'
import { EPageTitleFilterKind } from '../page-title-filter/types';
import { TSideNavigation } from './types';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';



export default function SideNavigation({ onClick, items, activeLink, map, active, completed }: TSideNavigation) {

  const location = useLocation();
  const [activeKind, setActiveKind] = useState<EPageTitleFilterKind>(activeLink)

  const onClickLocal = (viewType: EPageTitleFilterKind) => {
    onClick!(viewType);
    setActiveKind(viewType);
  }

  return (
    <nav className="nav">
      {items.includes(EPageTitleFilterKind.Map) &&
        <NavLink to={map ? map : '/map'} state={{ prev: location.pathname }} className='nav_nounderline'>
          <SideNavLink path='/map' type={EPageTitleFilterKind.Map} visible onClick={onClickLocal} active={activeKind === EPageTitleFilterKind.Map} />
        </NavLink>
      }
      {
        items.includes(EPageTitleFilterKind.Active) &&
        <NavLink to={active ? active : '/active'} state={{ prev: location.pathname }} className='nav_nounderline'>
          <SideNavLink path='/active' type={EPageTitleFilterKind.Active} visible onClick={onClickLocal} active={activeKind === EPageTitleFilterKind.Active} />
        </NavLink>
      }
      {
        items.includes(EPageTitleFilterKind.Completed) &&
        <NavLink to={completed ? completed : '/completed'} state={{ prev: location.pathname }} className='nav_nounderline'>
          <SideNavLink path='/completed' type={EPageTitleFilterKind.Completed} visible onClick={onClickLocal} active={activeKind === EPageTitleFilterKind.Completed} />
        </NavLink >
      }
      {
        items.includes(EPageTitleFilterKind.Acceptation) &&
        <NavLink to={'/approve'} state={{ prev: location.pathname }} className='nav_nounderline'>
          <SideNavLink path='/approve' type={EPageTitleFilterKind.Acceptation} visible onClick={onClickLocal} active={activeKind === EPageTitleFilterKind.Acceptation} />
        </NavLink>
      }
      {items.includes(EPageTitleFilterKind.Statistics) && <SideNavLink path='/statistics' type={EPageTitleFilterKind.Statistics} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Statistics} />}
      {items.includes(EPageTitleFilterKind.CreateEdit) && 
      <NavLink to={'/create'} className='nav_nounderline'>
        <SideNavLink path='/create' type={EPageTitleFilterKind.CreateEdit} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.CreateEdit} />
      </NavLink>
      }
    </nav>
  )
}