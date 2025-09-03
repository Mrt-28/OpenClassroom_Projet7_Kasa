import { useState } from 'react'

import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function LogementCarousel(props) {

    const [pictureIndex, setPictureIndex] = useState(0)
    const pictures = props.pictures

    function left() {
        if (pictureIndex > 0) {
            setPictureIndex(pictureIndex - 1)
        }
        else {
            setPictureIndex(pictures.length - 1)
        }
    }
    function right() {
        if (pictureIndex < pictures.length - 1) {
            setPictureIndex(pictureIndex + 1)
        }
        else {
            setPictureIndex(0)
        }
    }

    return (
        <div className="logement__carousel">
            <img onClick={left} className="logement__carousel__left-arrow" src={arrowLeft} alt="Previous" />
            <div className="logement__carousel__picture-container">
                <img className="logement__carousel__picture-container__picture" src={pictures[pictureIndex]} alt={props.title} />
            </div>
            <img onClick={right} className="logement__carousel__right-arrow" src={arrowRight} alt="Next" />
        </div>
    )
}

export default LogementCarousel