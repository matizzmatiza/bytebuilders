import { Link } from 'react-router-dom';
import LogoWebp from '../assets/images/logo_bytebuilders.webp';

function Logo () {
    return (
        <Link to='/' className='header__link'>
            <img src={LogoWebp} className='header__logo' alt='Logo ByteBuilders' />
        </Link>
    );
}

export default Logo;