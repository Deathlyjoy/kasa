// ----- Import fichier de style -----
import '../style/about.scss'

//----- Import des composants -----
import Banner from "../components/Banner";

// ----- Import Collapse -----
import Collapse from '../components/Collapse'

// ----- Import des assets -----
import data from '../assets/aboutCollapse.json'


// ----- Page About -----
function About() {
   return (
      <main>
         <Banner origin="about" /> {/* Affiche le composant Banner ayant l'origine "about" */}
         <Collapse data={data}/>
      </main>
   )
 }
 
 export default About;