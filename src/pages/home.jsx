// ----- Import fichier de style -----
import '../style/home.scss';

//----- Import des composants -----
import Banner from "../components/Banner";
import Card from '../components/Card';

function Home() {
    return (
        <main>
            <Banner origin="home" /> {/* Affiche le composant Banner ayant l'origine "home" */}
            <Card />
        </main>
    )
}

export default Home;