import { useState } from 'react';

import arrowLeft from '../assets/arrow_left.svg';
import arrowRight from '../assets/arrow_right.svg';

import '../sass/logement.scss';

function LogementCarousel(props) {

    const [pictureIndex, setPictureIndex] = useState(0);
    const pictures = props.pictures;

    function left(event) {
        const picture = event.target.parentElement.querySelector('.logement-carousel__cover');
        if (pictureIndex > 0) {
            setPictureIndex(pictureIndex - 1);
        }
        else {
            setPictureIndex(pictures.length - 1);
        }
    }
    function right(event) {
        const picture = event.target.parentElement.querySelector('.logement-carousel__cover');
        if (pictureIndex < pictures.length - 1) {
            setPictureIndex(pictureIndex + 1);
        }
        else {
            setPictureIndex(0);
        }
    }

    return (
        <div className="logement-carousel">
            <img onClick={left} className="logement-carousel__left-arrow" src={arrowLeft} alt="Previous" />
            <img className="logement-carousel__picture" src={pictures[pictureIndex]} alt={props.title} />
            <img onClick={right} className="logement-carousel__right-arrow" src={arrowRight} alt="Next" />          
        </div>
    )
}

export default LogementCarousel