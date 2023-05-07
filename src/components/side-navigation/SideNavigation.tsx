import SideNavLink from '../ui/SideNavLink/SideNavLink';
import './SideNavigation.scss'
import { EPageTitleFilterKind } from '../page-title-filter/types';
import { TSideNavigation } from './types';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';



export default function SideNavigation({ onClick, items, activeLink }: TSideNavigation) {

  const [active, setActive] = useState<EPageTitleFilterKind>(activeLink)

  const onClickLocal = (viewType: EPageTitleFilterKind) => {
    onClick!(viewType);
    setActive(viewType);
  }

  return (
    <nav className="nav">
      {items.includes(EPageTitleFilterKind.Map) &&
      <NavLink to={'/map'} className='nav_nounderline'>
        <SideNavLink path='/map' type={EPageTitleFilterKind.Map} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Map} />
      </NavLink>
      }
      {items.includes(EPageTitleFilterKind.Active) && 
      <NavLink to={'/active'} className='nav_nounderline'>
        <SideNavLink path='/active' type={EPageTitleFilterKind.Active} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Active} />
      </NavLink>
      }
      {items.includes(EPageTitleFilterKind.Completed) &&
      <NavLink to={'/completed'} className='nav_nounderline'>
        <SideNavLink path='/completed' type={EPageTitleFilterKind.Completed} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Completed} />
      </NavLink>
      }
      {items.includes(EPageTitleFilterKind.Acceptation) && 
      <NavLink to={'/approve'} className='nav_nounderline'>
        <SideNavLink path='/approve' type={EPageTitleFilterKind.Acceptation} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Acceptation} />
      </NavLink>
      }
      {items.includes(EPageTitleFilterKind.Statistics) && <SideNavLink path='/statistics' type={EPageTitleFilterKind.Statistics} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Statistics} />}
      {items.includes(EPageTitleFilterKind.CreateEdit) && <SideNavLink path='/create' type={EPageTitleFilterKind.CreateEdit} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.CreateEdit} />}
    </nav>
  )
}