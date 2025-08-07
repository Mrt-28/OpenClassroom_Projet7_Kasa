import { useParams } from 'react-router-dom'
import dataLogements from '../../data/logements.json';

import LogementCarousel from '../../components/LogementCarousel.jsx';

function Logements() {
    const { id } = useParams()
    const indexJson = dataLogements.findIndex((logement) => logement.id === id);

    return (
        <>
            Logements
            {id}
            <LogementCarousel pictures={dataLogements[indexJson].pictures} />
        </>
    )
}
export default Logements
