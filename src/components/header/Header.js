import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='navbar'>
           <a href='/'>home</a> 
           <a href='/review'>review</a> 
           <a href='/dashboard'>dashboard</a> 
           <a href='/blogs'>blogs</a> 
           <a href='/about'>about</a> 
        </nav>
    );
};

export default Header;