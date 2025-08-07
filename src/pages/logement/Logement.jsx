import { useParams } from 'react-router-dom'
import dataLogements from '../../data/logements.json';

import LogementCarousel from '../../components/LogementCarousel.jsx';
import Dropdown from '../../components/Dropdown.jsx';

function Logements() {
    const { id } = useParams()
    const indexJson = dataLogements.findIndex((logement) => logement.id === id);

    return (
        <>
            <LogementCarousel pictures={dataLogements[indexJson].pictures} />
            <h1>{dataLogements[indexJson].title}</h1>
            <p>{dataLogements[indexJson].location}</p>
            {/* tags */}
            {/* RATING */}
            {/* host */}
            <Dropdown title='Description' content={dataLogements[indexJson].description} />
            <Dropdown title='Équipements' content={dataLogements[indexJson].equipments.map((item, index) => <li key={index}>{item}</li>)} />
        </>
    )
}
export default Logements
