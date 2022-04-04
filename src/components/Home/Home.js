import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews] = useReviews();
    const newReviews = reviews.slice(0, 3);
    const [restReviews, setRestReviews] = useState([]);
    const [toggleSeeReviewsButton, setToggleSeeReviewsButton] = useState(false);


    const handleSeeAllReviews = () => {
        const restReviews = reviews.slice(3, reviews.length);
        setRestReviews(restReviews);
        setToggleSeeReviewsButton(!toggleSeeReviewsButton);
    }
    const handleSeeLessReviews = () => {
        setRestReviews([]);
        setToggleSeeReviewsButton(!toggleSeeReviewsButton);
    }
    return (
        <main>
            <section className='shoes-detail'>
                <div className="shoes-heading">
                    <h1>Wear Shoes</h1>
                    <h1 className='second-heading'>Make Foos</h1>
                    <p>Shoes are an essential part of human beings. You can not imagine your day without shoes. So it is time to study some reviews and buy a pair of fancy shoes from here</p>
                    <Link to='/livedemo' style={{ fontSize: '30px', textDecoration: 'none', backgroundColor: '#0170c5', padding: '15px 20px', borderRadius: '20px', color: 'white' }}>Live Demo</Link>
                </div>
                <div className="shoes-heading-image">
                    <img src="https://i.ibb.co/1Lk5jtJ/main-image.jpg" alt="" />
                </div>
            </section>
            <section>
                <h1>Customer Reviews({reviews.length})</h1>
                <div className="review">
                    {
                        newReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                    {
                        restReviews.map(
                            review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                    }
                </div>

                {
                    toggleSeeReviewsButton ? <button className='see-all-less-button' onClick={handleSeeLessReviews}>See Less Reviews</button> : <button className='see-all-less-button' onClick={handleSeeAllReviews}>See All Reviews</button>
                }
            </section>
        </main>
    );
};

export default Home;
