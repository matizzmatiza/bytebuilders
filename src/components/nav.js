import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav({ active, onLinkClick }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navClass = active ? 'header__nav header__nav--active' : 'header__nav';

    const handleClick = () => {
        if (windowWidth < 768 && onLinkClick) {
            onLinkClick(!active);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={navClass}>
            <ul className='header__list'>
                <li className='header__item'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'} onClick={handleClick}>Home</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/offer' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'} onClick={handleClick}>Oferta</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/realizations' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'} onClick={handleClick}>Realizacje</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/news' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'} onClick={handleClick}>Aktualności</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'} onClick={handleClick}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;