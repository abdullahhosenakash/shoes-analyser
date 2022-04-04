import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Review.css';

const Review = props => {
    const { name, picture, ratings, review } = props.review;
    let newRatings = [];
    for (let i = 0; i < ratings; i++) {
        newRatings[i] = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
    }
    console.log(newRatings)
    return (
        <div className='customer-review'>
            <img src={picture} alt="" />
            <div className="review-detail">
                <h3>{name}</h3>
                <h3>Ratings: <span className='ratings'>{newRatings}</span></h3>
                <h3>Review:</h3>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;