// ----- Import de Link depuis la bibliothèque react-router-dom -----
import { Link } from 'react-router-dom'

// ----- Import fichier de style -----
import '../style/card.scss'

// ----- Import fichier JSON -----
import DataLocation from '../assets/location.json'


// ----- Composant CardLocation -----
function Card() {
   return (
      <section className='ContLocation'>
         {DataLocation.map((location) => (

            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='ContCard'>
                  <img className='ImgLocation' src={location.cover} alt={location.title}/>
                  <div className='GradientLocation'></div>          
                  <figcaption className='TitleLocation'>{location.title}</figcaption>
               </figure>
            </Link>

         ))}
      </section>
   )
}
export default Card;