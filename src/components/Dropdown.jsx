//import arrowDown from '../assets/arrow_down.svg'
import arrowUp from '../assets/arrow_up.svg'

function Dropdown(props) {
	function toggleDropdown(event) {
		const arrow = event.currentTarget.querySelector('.dropdown__header__arrow')
		if (arrow.classList.contains('dropdown__header__arrow--closed')) {
			arrow.classList.remove('dropdown__header__arrow--closed')
			arrow.classList.add('dropdown__header__arrow--opened')
			//arrow.src = arrowDown

			const content = event.currentTarget.nextElementSibling
			content.classList.remove('dropdown__content--closed')
			content.classList.add('dropdown__content--opened')
		} else {
			arrow.classList.remove('dropdown__header__arrow--opened')
			arrow.classList.add('dropdown__header__arrow--closed')
			//arrow.src = arrowUp

			const content = event.currentTarget.nextElementSibling
			content.classList.remove('dropdown__content--opened')
			content.classList.add('dropdown__content--closed')
		}
	}
	return (
		<div className="dropdown">
			<div onClick={toggleDropdown} className="dropdown__header">
				<h2 className="dropdown__header__title">{props.title}</h2>
				<img
					src={arrowUp}
					alt="dropdown arrow"
					className="dropdown__header__arrow dropdown__header__arrow--closed"
				/>
			</div>
			<div className="dropdown__content dropdown__content--closed">
				<p className="dropdown__content__text">{props.content}</p>
			</div>
		</div>
	)
}

export default Dropdown
