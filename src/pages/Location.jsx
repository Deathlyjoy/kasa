// ----- Import de useState, useEffect depuis la bibliothèque react-router-dom -----
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// ----- Import fichier de style -----
import '../style/location.scss';

//----- Import des composants -----
import Error from '../pages/Error';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

// ----- Import fichier JSON -----
import DataLocation from '../assets/location.json'

// ----- Rendu de la page Location -----
function Location() {
    const [logement, setLogement] = useState(null); 
    const { id } = useParams(); // Récupère l'id du logement dans l'url
    useEffect(() => {  // Récupère les infos du logement en fonction de l'id
        const data = DataLocation.find(location => location.id === id);
        if (data) {
            setLogement(data);
        } else { 
            setLogement(null);
        }
    }, [id]);
    if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
       return (<Error />);
    }
    // Affichage de la page
    return (
        <main>
            {logement.pictures && <Slideshow images={logement.pictures} />}
            <section className='ContInfo'>
                <div className='ContInfoLogement'>
                    <h1 className='TittleInfo'>{logement.title}</h1>
                    <p className='TextInfo'>{logement.location}</p>
                    <ul className='TagUl'>
                        {logement.tags.map(tag => (
                            <li className='TagLi' key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='ContInfoOwner'>
                    <div className='TEST'>
                        <p className='TextInfoOwner'>{logement.host.name}</p>
                        <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </section>
            <div className="lodgment_details">
                <Collapse
                    title="Description"
                    description={logement.description}
                    class="dropdown_lodgment"
                ></Collapse> {/* Affiche le composant Collapse avec le titre "Description" et la description de l'hébergement */}
                <Collapse
                    title="Équipements"
                    description={logement.equipments}
                    class="dropdown_lodgment"
                ></Collapse> {/* Affiche le composant Collapse avec le titre "Équipements" et les équipements de l'hébergement */}
            </div>
        </main>
    )
}

export default Location;