import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header__item'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'}>Home</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/offer' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'}>Oferta</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/realizations' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'}>Realizacje</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/news' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'}>Aktualności</NavLink>
                </li>
                <li className='header__item'>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "header__link--nav header__link--active": 'header__link--nav'}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;