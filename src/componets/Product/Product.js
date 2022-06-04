import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";


const auth = getAuth(app)

const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Product page </h2>
            <h3>{user?user.displayName: 'vooooot'}</h3>
        </div>
    );
};

export default Product;