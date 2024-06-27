import React from 'react';
import './RatingStars.scss';

const RatingStars = ({ rating }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9733;</span>);
            }
        }
        return stars;
    };

    return (
        <div className="rating-stars">
            {renderStars()}
        </div>
    );
}

export default RatingStars;