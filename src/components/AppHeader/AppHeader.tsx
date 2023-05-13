import { FC, useState } from "react"
import header from "./AppHeader.module.scss"
import { NavLink } from "react-router-dom"
import { Button } from "../UI/Buttons/Button"
import { Avatar } from "../Avatar/Avatar"
import { Logo } from "../UI/Logo/Logo"
import { BlogIcon, BurgerMenuIcon, EmptyMessageIcon, LocationIcon, PersonIcon, PrivacyIcon } from "../UI/Icons/icons"

export const AppHeader: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleChange = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const { location } = window;

    return (
        <header className={header.header}>
            {/* Заменить на компонент аватара */}
            <NavLink end to="/profile" className={header.avatar}>
                <Avatar size={43} url={"https://fraguru.com/mdimg/avatariru/m.298472.jpg"}/>
            </NavLink>
            <NavLink end to="/" className={header.logo}>
                <Logo />
            </NavLink>
            <Button type="button" icon={<BurgerMenuIcon />} extraClass={header.burgerMenu} onClick={handleChange}/>
            <nav className={`${header.menu} ${isMenuOpen ? header.menu_opened : ""}`}>
                <ul className={header.list}>
                    <li className={header.personal} onClick={handleChange}>
                        <NavLink end to="/volunteer" className={({ isActive }) => isActive ? header.link__active : header.link} >
                            <PersonIcon />
                            <p className={header.list__caption}>Личный кабинет</p>
                        </NavLink>
                    </li>
                    <li className={header.blog} onClick={handleChange}>
                        <NavLink end to="/blog" className={({ isActive }) => isActive ? header.link__active : header.link}>
                            <BlogIcon />
                            <p className={header.list__caption}>Блог</p>
                        </NavLink>
                    </li>
                    <li className={header.privacy} onClick={handleChange}>
                        <NavLink end to="/privacy" className={({ isActive }) => isActive ? header.link__active : header.link}>
                            <PrivacyIcon />
                            <p className={header.list__caption}>Политика конфиденциальности</p>
                        </NavLink>
                    </li>
                    <li className={header.contacts} onClick={handleChange}>
                        <NavLink end to="/contacts" className={({ isActive }) => isActive ? header.link__active : header.link}>
                            <LocationIcon type="blue" />
                            <p className={header.list__caption}>Контакты</p>
                        </NavLink>
                    </li>
                </ul>
                { 
                  !location.pathname.includes('/admin') && 
                  !location.pathname.includes('/mainadmin')  && 
                  !location.pathname.includes('/approve') && 
                  !location.pathname.includes('/statistics') &&
                  !location.pathname.includes('/create') && (
                    (<div className={header.message__area} onClick={handleChange}>
                        <Button
                            variant="icon"
                            size="small"
                            theme="dark"
                            type="button"
                            hasBorder={true}
                            icon={<EmptyMessageIcon type="white" />}
                            extraClass={header.message__button}
                        />
                        <p className={header.message__caption}>Написать администратору</p>
                    </div>)
                  )
                }
            </nav>
        </header>
    )
}