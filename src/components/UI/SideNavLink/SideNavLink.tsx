import { useState } from 'react';
import { EPageTitleFilterKind } from '../../PageTitleFilter/types';
import { getTitleImg } from '../../PageTitleFilter/PageTitleFilter';
import './SideNavLink.scss'
import { Link } from "react-router-dom"

interface ISideNavLink {
  path: string,
  type: EPageTitleFilterKind,
  //type: 'map' | 'active' | 'completed' | 'approve' | 'statistics' | 'create',
  visible: boolean,
  onClick?: ((viewType: EPageTitleFilterKind) => void),
  active: boolean,
}

export default function SideNavLink({ path, type, visible, onClick, active }: ISideNavLink) {
  const [text,] = useState<string>(type.valueOf())



  return (
    <>
      {visible &&
        <div className={`${active && 'nav_link_active'} nav_link`} onClick={(event: React.MouseEvent<HTMLDivElement>) => { onClick!(type) }}>
          {/* <Link to={path} className='nav_link'> */}
          {getTitleImg(type, { type: 'white' })}
          <p className='nav_link_text'>{text}</p>
          {/* </Link> */}
        </div>
      }
    </>
  )
} 

