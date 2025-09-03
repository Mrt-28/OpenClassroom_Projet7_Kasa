import arrowDown from '../assets/arrow_down.svg'
import arrowUp from '../assets/arrow_up.svg'

function Dropdown(props) {
    function toggleDropdown (event){
        const arrow = event.currentTarget.querySelector('.dropdown__header__arrow')
        if(arrow.classList.contains('closed')) {
            arrow.classList.remove('closed')
            arrow.classList.add('opened')
            arrow.src = arrowDown

            const content = event.currentTarget.nextElementSibling
            content.classList.toggle('dropdown__content__hidden')
        } else {
            arrow.classList.remove('opened')
            arrow.classList.add('closed')
            arrow.src = arrowUp

            const content = event.currentTarget.nextElementSibling
            content.classList.toggle('dropdown__content__hidden')
        }
    }
    return (
        <div className='dropdown'>
            <div onClick={toggleDropdown} className='dropdown__header'>
                <h2 className='dropdown__header__title'>{props.title}</h2>
                <img src={arrowUp} alt='dropdown arrow' className='dropdown__header__arrow closed' />                
            </div>
            <div className='dropdown__content dropdown__content__hidden'>
                <p className='dropdown__content__text'>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Dropdown