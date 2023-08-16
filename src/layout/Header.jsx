// ----- Import de Link et NavLink depuis la bibliothèque react-router-dom -----
import { Link, NavLink } from "react-router-dom";

// ----- Import fichier de style -----
import '../style/header.scss';

// ----- Import logo -----
import Logo from '../assets/logo.png';

// ----- Composant Header -----
function Header() {
    return (
        <header className='header'>
            <nav className="nav">
                <Link to="/">
                    <img className='nav_logo' src={Logo} alt="Logo Kasa" />
                </Link>
                <NavLink to="/" className='nav_link'>
                    Accueil
                </NavLink>
                <NavLink to="/about" className='nav_link'>
                    À Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;