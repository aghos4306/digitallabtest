import React, {useState} from 'react';
import SliderData from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './carousel.css';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? (slides.length) - 1 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === (slides.length) - 1 ? 0 : current + 1);
    }

    return (
        <section className="slider">
             <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {/* {index === current && (<img src={slide.image} alt={slide.name} className="image" />)} */}
                        <img src={slide.image} alt={slide.name} className="image" /> 
                    </div>
                )
            })}
            <h1 className="latest-recipe">Latest Recipe</h1>
        </section>
    )
}

export default ImageSlider;