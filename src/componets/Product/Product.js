import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Product = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h2>Product page </h2>
            <h3>{user?user.displayName: 'vooooot'}</h3>
        </div>
    );
};

export default Product;