import React from 'react';
import './Review.css';

const Review = props => {
    const { name, picture, ratings, review } = props.review;
    return (
        <div className='customer-review'>
            <img src={picture} alt="" />
            <div className="review-detail">
                <h3>{name}</h3>
                <h3>Ratings: {ratings} star</h3>
                <h3>Review:</h3>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;