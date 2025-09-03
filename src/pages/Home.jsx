import { Link } from 'react-router-dom'

import LogementCard from '../components/LogementCard.jsx'
import ScenicHeader from '../components/ScenicHeader.jsx'
import dataLogements from '../data/logements.json'//custom hook

function Home() {
  return (
    <div className='home'>

      <ScenicHeader img='/img_backtitle1.jpg' txt={<>Chez vous,<br className='scenic-header__break' /> partout et ailleurs</>} />

      <div className='logement-list'>
        {dataLogements.map((item) => (
          <Link key={item.id} to={`/logement/${item.id}`} className='link'>
            <LogementCard id={item.id} title={item.title} cover={item.cover} />
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Home