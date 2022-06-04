import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div  className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
                <Link to='/Login'>Login</Link>
            </nav>
            
        </div>
    );
};

export default Header;