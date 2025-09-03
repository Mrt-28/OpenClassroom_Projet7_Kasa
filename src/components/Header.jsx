import { NavLink } from 'react-router-dom'

import logoKasa from '../assets/logo_kasa.svg'

function Header() {
    return (
        <header className="headband">
            <img className='headband__logo' src={logoKasa} alt='logo kasa'/>
            <nav className='headband__links'>
                <NavLink className={({ isActive }) => (isActive ? 'headband__links__link--active' : 'headband__links__link')} to='/' end>Acceuil</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'headband__links__link--active' : 'headband__links__link')} to='/about'>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header