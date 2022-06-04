import React, { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const goggleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const signWithInGoogle = () => {
    signInWithPopup(auth, goggleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  };
 
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  // number 1
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  return {
    user,
    signWithInGoogle,
    handleSignOut
  };
};

export default useFirebase;
