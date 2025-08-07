import logoKasa from '../assets/logo_kasa.svg'
import '../sass/footer.scss'

function Footer() {
    return (
        <footer className="footband">
            <img className='footband__logo' src={logoKasa} alt='logo kasa'/>
            <p className='footband__rights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer