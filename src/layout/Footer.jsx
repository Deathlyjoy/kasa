// ----- Import de Link et NavLink depuis la bibliothèque react-router-dom -----
import { Link } from "react-router-dom";

// ----- Import fichier de style -----
import '../style/footer.scss';

// ----- Import logo -----
import LogoFooter from '../assets/logo-footer.png';

// ----- Composant Header -----
function Footer() {
    return (
        <footer className='footer'>
            <Link to="/">
                <img className='footer_logo' src={LogoFooter} alt="Logo Kasa" />
            </Link>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;