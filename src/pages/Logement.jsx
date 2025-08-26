import { useParams } from 'react-router-dom'
import dataLogements from '../data/logements.json';

import LogementCarousel from '../components/LogementCarousel.jsx';
import Dropdown from '../components/Dropdown.jsx';
import Rating from '../components/LogementRating.jsx';
import Host from '../components/LogementHost.jsx';

function Logements() {
    const { id } = useParams()
    const indexJson = dataLogements.findIndex((logement) => logement.id === id);

    return (
        <div className='logement'>
            <LogementCarousel pictures={dataLogements[indexJson].pictures} />

            <div className='logement__desc'>
                <h1 className='logement__desc__title'>{dataLogements[indexJson].title}</h1>
                <p className='logement__desc__location'>{dataLogements[indexJson].location}</p>
                <div className='logement__desc__tags'>
                    {dataLogements[indexJson].tags.map((tag, index) => (
                        <span key={index} className='logement__desc__tag'>{tag}</span>
                    ))}
                </div>                
            </div>

            <div className='logement__info'>
                <Rating rating={dataLogements[indexJson].rating} />
                <Host host={dataLogements[indexJson].host} />
            </div>

            <div className='logement__dropdowns'>
                <Dropdown title='Description' content={dataLogements[indexJson].description} />
                <Dropdown title='Équipements' content={dataLogements[indexJson].equipments.map((item, index) => <li key={index}>{item}</li>)} />
            </div>
        </div>
    )
}
export default Logements
