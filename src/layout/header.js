import Logo from '../components/logo';
import Nav from '../components/nav';

function Header() {
    return (
        <header className="header">
            <div className='header__wrapper'>
                <Logo />
                <Nav />
            </div>    
        </header>
    );
}

export default Header;