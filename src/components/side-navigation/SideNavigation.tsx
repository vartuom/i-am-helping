import SideNavLink from '../ui/SideNavLink/SideNavLink';
import './SideNavigation.scss'
import { EPageTitleFilterKind } from '../page-title-filter/types';
import { TSideNavigation } from './types';
import { useState } from 'react';



export default function SideNavigation({ onClick, items, activeLink }: TSideNavigation) {

  const [active, setActive] = useState<EPageTitleFilterKind>(activeLink)

  const onClickLocal = (viewType: EPageTitleFilterKind) => {
    onClick!(viewType);
    setActive(viewType);
  }

  return (
    <nav className="nav">
      {items.includes(EPageTitleFilterKind.Map) && <SideNavLink path='/map' type={EPageTitleFilterKind.Map} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Map} />}
      {items.includes(EPageTitleFilterKind.Active) && <SideNavLink path='/active' type={EPageTitleFilterKind.Active} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Active} />}
      {items.includes(EPageTitleFilterKind.Completed) && <SideNavLink path='/completed' type={EPageTitleFilterKind.Completed} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Completed} />}
      {items.includes(EPageTitleFilterKind.Acceptation) && <SideNavLink path='/approve' type={EPageTitleFilterKind.Acceptation} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Acceptation} />}
      {items.includes(EPageTitleFilterKind.Statistics) && <SideNavLink path='/statistics' type={EPageTitleFilterKind.Statistics} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.Statistics} />}
      {items.includes(EPageTitleFilterKind.CreateEdit) && <SideNavLink path='/create' type={EPageTitleFilterKind.CreateEdit} visible onClick={onClickLocal} active={active === EPageTitleFilterKind.CreateEdit} />}
    </nav>
  )
}