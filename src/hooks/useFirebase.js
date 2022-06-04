import React, { useEffect, useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect( () => {

    },[])

   const signWithInGoogle = () => {
       console.log('google sign in');
   }

    return [user, setUser]
};

export default useFirebase;  