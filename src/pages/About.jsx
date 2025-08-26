import Dropdown from '../components/Dropdown.jsx';
import dataAbout from '../data/about.json';

function About() {
    return (
        <> 
            {dataAbout.map((item)=>(
                <Dropdown title={item.title} content={item.content} />
            ))}
        </>
    )
}

export default About;
