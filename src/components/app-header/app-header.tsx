import { FC, useEffect, useState } from "react"
import header from "./app-header.module.scss"
import { NavLink, useLocation } from "react-router-dom"
import { Logo } from "../ui/Logo/Logo"
import { BlogIcon, BurgerMenuIcon, EmptyMessageIcon, LocationIcon, PersonIcon, PrivacyIcon } from "../ui/icons/icons"
import { Button } from "../ui/buttons/Button"
import { Avatar } from "../avatar/Avatar"

export const AppHeader: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleChange = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const location = useLocation();
    const isOnAdminPage = location.pathname.includes('/admin');

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
                        <NavLink end to="/personal" className={({ isActive }) => isActive ? header.link__active : header.link} >
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
                {isOnAdminPage? '' :
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
                </div>)}
            </nav>
        </header>
    )
}