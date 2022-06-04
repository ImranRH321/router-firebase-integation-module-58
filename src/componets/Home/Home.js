import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h2>This is Home</h2>
            <h4>{user?user.displayName: 'no body'}</h4>
        </div>
    );
};

export default Home;