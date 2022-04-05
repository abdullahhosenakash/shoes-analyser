import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Review.css';

const Review = props => {
    const { name, picture, ratings, review } = props.review;
    let newRatings = [];
    let customKey;
    for (let i = 0; i < ratings; i++) {
        //khub jhamela koreche ei font awesome er key er warning. 
        customKey = Math.random(100);
        newRatings[i] = <FontAwesomeIcon key={customKey} icon={faStar}></FontAwesomeIcon>;
    }
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