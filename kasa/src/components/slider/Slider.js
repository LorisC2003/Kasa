import React, { useState } from 'react';
import data from '../../logements.json';
import './Slider.scss';

const ImageSlider = () => {
    const pictures = data.map((logement) => logement.pictures).flat();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={pictures[currentIndex]} alt={`Logement ${currentIndex}`} className="slider-image" />
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageSlider;