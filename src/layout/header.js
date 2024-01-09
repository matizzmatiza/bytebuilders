import { useState } from 'react';
import Logo from '../components/logo';
import Nav from '../components/nav';
import Hamburger from '../components/hamburger';

function Header() {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const handleHamburgerToggle = () => {
        setIsHamburgerActive((prevIsHamburgerActive) => !prevIsHamburgerActive);
    };

    return (
        <header className="header">
            <div className='header__wrapper'>
                <Logo />
                <Nav active={isHamburgerActive} onLinkClick={handleHamburgerToggle} />
                <Hamburger isActive={isHamburgerActive} onToggle={handleHamburgerToggle} />
            </div>
        </header>
    );
}

export default Header;