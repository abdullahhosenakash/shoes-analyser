import React from 'react';
import { Link } from 'react-router-dom';
import './LiveDemo.css';

const LiveDemo = () => {
    return (
        <div className='live-demo'>
            <h1>Demo of the Shoes</h1>
            <img src="https://i.ibb.co/1Lk5jtJ/main-image.jpg" alt="" />
            <p><Link to='/home' style={{ fontSize: '30px', textDecoration: 'none', backgroundColor: '#0170c5', padding: '15px 20px', borderRadius: '20px', color: 'white' }}>Go Home</Link></p>
        </div>
    );
};

export default LiveDemo;