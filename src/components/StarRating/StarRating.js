import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = ({ noOfStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoverStars, setHoverStars] = useState(0);

    return (
        <div className='wrapper'>
            <p>rate using stars:</p>
            <div className='stars-rating'>
                {[...Array(noOfStars)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={(hoverStars || selectedStars) > index ? 'active' : 'inactive'}
                        onMouseEnter={() => setHoverStars(index + 1)}
                        onClick={() => setSelectedStars(index + 1 === selectedStars ? 0 : index + 1)}
                        onMouseLeave={() => setHoverStars(0)}
                    />
                ))}
            </div>
        </div>
    );
};

export default StarRating;
