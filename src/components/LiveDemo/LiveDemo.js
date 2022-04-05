import React from 'react';
import { Link } from 'react-router-dom';
import './LiveDemo.css';

const LiveDemo = () => {
    return (
        <div className='live-demo'>
            <h1>Demo of the Shoes</h1>
            <img src="https://i.ibb.co/1Lk5jtJ/main-image.jpg" alt="" />
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}><span className='live-demo-see-all-button see-all-reviews-button'>Go Back</span></Link>
        </div>
    );
};

export default LiveDemo;