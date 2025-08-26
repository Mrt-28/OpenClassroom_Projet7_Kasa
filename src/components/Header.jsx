import { useState } from 'react'
import { Link } from 'react-router-dom';

import logoKasa from '../assets/logo_kasa.svg'

function Header() {
    return (
        <header className="headband">
            <img className='headband__logo' src={logoKasa} alt='logo kasa'/>
            <nav className='headband__links'>
                <Link to='/'>Acceuil</Link>
                <Link to='/about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header