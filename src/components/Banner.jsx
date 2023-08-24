// ----- Import Banner -----
import BannerHome from '../assets/banner-home.png';
import BannerAbout from '../assets/banner-about.png';

// ----- Composant Banner -----
function Banner(props) {
    if (props.origin === "home") { // Si l'origine est "home", affiche une bannière avec un titre spécifique
        return (
            <section className="banner_home">
                <img className='banner_img' src={BannerHome} alt='Paysage' />
            </section>
        );
    } else if (props.origin === "about") { //Sinon affiche une bannière sans contenu
        return (
            <section className="banner_about">
                <img className='banner_img' src={BannerAbout} alt='Paysage' />
            </section>
        );
    }
  }
  
  export default Banner;
  