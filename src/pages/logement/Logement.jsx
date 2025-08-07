import { useParams } from 'react-router-dom'
import dataLogements from '../../data/logements.json';

function Logements() {
    const { id } = useParams()

    return (
        <>
            Logements
            {id}

        </>
    )
}

export default Logements
