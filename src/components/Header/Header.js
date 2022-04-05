import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <CustomLink to='/home'><span>HOME</span></CustomLink>
            <CustomLink to='/reviews'><span>REVIEWS</span></CustomLink>
            <CustomLink to='/dashboard'><span>DASHBOARD</span></CustomLink>
            <CustomLink to='/blogs'><span>BLOGS</span></CustomLink>
            <CustomLink to='/about'><span>ABOUT</span></CustomLink>
        </nav>
    );
};

export default Header;