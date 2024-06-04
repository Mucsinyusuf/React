import './Styles.css';
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='nav'>
            <img src={logo} alt='logo' className='nav-logo'/>
            <h3 className='nav--title'>MUCSIN </h3>
            <ul className='nav--logo_text'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
