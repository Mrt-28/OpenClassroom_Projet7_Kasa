import { Link } from 'react-router-dom';

import LogementCard from '../../components/LogementCard.jsx';
import ScenicHeader from '../../components/ScenicHeader.jsx';
import dataLogements from '../../data/logements.json';

import '../../sass/home.scss'

function Home() {
  return (
    <div className='home'>     
      <ScenicHeader img='/img_backtitle1.jpg' txt='Chez vous, partout et ailleurs' />
      {dataLogements.map((item) => (
        <Link key={item.id} to={`/logement/${item.id}`} className='link'>
          <LogementCard id={item.id} title={item.title} cover={item.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Home