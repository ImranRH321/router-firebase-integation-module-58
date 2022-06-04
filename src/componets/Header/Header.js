import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => { 
    const {user, handleSignOut} = useFirebase()
    return (
        <div  className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
                {user?.displayName && <span>{user.displayName}</span>}
                {user?.uid ?
                <button onClick={handleSignOut}>sign out</button>
                :<Link to='/Login'>Login</Link>}
            </nav>
            
        </div>
    );
};

export default Header;