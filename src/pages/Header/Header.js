import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/shop'>Shop</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/Login'>Login</Link>
           
        </div>
    );
};

export default Header;