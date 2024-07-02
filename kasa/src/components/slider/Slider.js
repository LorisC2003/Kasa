import React, { useState } from 'react';
import './Slider.scss';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            {images.length > 1 && (
                <button className="prev" onClick={prevSlide}>&#10094;</button>
            )}
            <div className="slider-image-container">
                <img src={images[currentIndex]} alt={`Logement ${currentIndex}`} className="slider-image" />
            </div>
            {images.length > 1 && (
                <button className="next" onClick={nextSlide}>&#10095;</button>
            )}
            {images.length > 1 && (
                <div className="slider-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default ImageSlider;