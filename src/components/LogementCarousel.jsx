import { useState } from 'react'

import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function LogementCarousel(props) {
	const [pictureIndex, setPictureIndex] = useState(0)
	const pictures = props.pictures

	async function timeFadeOut(callback) {
		return new Promise((resolve) => {
			const picture = document.querySelector('.logement__carousel__picture-container__picture')
			picture.classList.add('fade-out')

			setTimeout(() => {
				callback()
			}, 500)

			setTimeout(() => {
				picture.classList.remove('fade-out')
				resolve()
			}, 1000)
		})
	}

	function timeFadein() {
		var picture = document.querySelector('.logement__carousel__picture-container__picture')
		picture.classList.add('fade-in')
		setTimeout(() => {
			picture.classList.remove('fade-in')
		}, 1000)
	}

	async function left() {
		const changeIndex = () => {
			if (pictureIndex > 0) {
				setPictureIndex(pictureIndex - 1)
			} else {
				setPictureIndex(pictures.length - 1)
			}
		}

		await timeFadeOut(changeIndex)
		timeFadein()
	}

	async function right() {
		const changeIndex = () => {
			if (pictureIndex < pictures.length - 1) {
				setPictureIndex(pictureIndex + 1)
			} else {
				setPictureIndex(0)
			}
		}

		await timeFadeOut(changeIndex)
		timeFadein()
	}

	return (
		<div className="logement__carousel">
			<img
				onClick={left}
				className="logement__carousel__left-arrow"
				src={arrowLeft}
				alt="Previous"
			/>
			<div className="logement__carousel__picture-container">
				<img
					className="logement__carousel__picture-container__picture"
					src={pictures[pictureIndex]}
					alt={props.title}
				/>
			</div>
			<img
				onClick={right}
				className="logement__carousel__right-arrow"
				src={arrowRight}
				alt="Next"
			/>
		</div>
	)
}

export default LogementCarousel
