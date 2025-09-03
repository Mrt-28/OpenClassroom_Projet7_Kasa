import Dropdown from '../components/Dropdown.jsx'
import ScenicHeader from '../components/ScenicHeader.jsx'

import dataAbout from '../data/about.json'

function About() {
    return (
        <> 
            <ScenicHeader subClassName='scenic-header__cover--about' img='/img_backtitle2.jpg' txt={<></>} />

            <div className='about'>
                {dataAbout.map((item)=>(
                    <Dropdown title={item.title} content={item.content} />
                ))}                
            </div>

        </>
    )
}

export default About
