import { useState, useRef } from 'react'

import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function LogementCarousel(props) {
	const [pictureIndex, setPictureIndex] = useState(0)
	const pictures = props.pictures
	const pictureRef = useRef(null)
	const isAnimatingRef = useRef(false)

	async function timeFadeOut(callback) {
		return new Promise((resolve) => {
			const picture = pictureRef.current
			if (!picture) return resolve()

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
		const picture = pictureRef.current
		if (!picture) return

		picture.classList.add('fade-in')
		setTimeout(() => {
			picture.classList.remove('fade-in')
		}, 1000)
	}

	async function left() {
		if (isAnimatingRef.current) return
		isAnimatingRef.current = true

		const changeIndex = () => {
			if (pictureIndex > 0) {
				setPictureIndex(pictureIndex - 1)
			} else {
				setPictureIndex(pictures.length - 1)
			}
		}

		await timeFadeOut(changeIndex)
		timeFadein()
		isAnimatingRef.current = false
	}

	async function right() {
		if (isAnimatingRef.current) return
		isAnimatingRef.current = true

		const changeIndex = () => {
			if (pictureIndex < pictures.length - 1) {
				setPictureIndex(pictureIndex + 1)
			} else {
				setPictureIndex(0)
			}
		}

		await timeFadeOut(changeIndex)
		timeFadein()
		isAnimatingRef.current = false
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
					ref={pictureRef}
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
