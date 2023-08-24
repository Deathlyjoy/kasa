// ----- Import fichier de style -----
import '../style/about.scss';

// ----- Import des composants -----
import Banner from "../components/Banner";
import Collapse from '../components/Collapse';

// ----- Import fichier JSON -----
import data from '../assets/aboutCollapse.json'

function About() {
    return (
        <main>
            <Banner origin="about" /> {/* Affiche le composant Banner ayant l'origine "about" */}
            <section className="dropdown">
          {
            // voici un commentaire
          }
          {data.map((text, idx) => {
            return (
              <Collapse
                title={text.title}
                key={idx}
                description={text.description}
                class="dropdown_container"
              />
            );
          })}
        </section>
        </main>
    )
}

export default About;