import React, { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
    console.log("google sign in");
  };

  return {
    user,
    signWithInGoogle,
  };
};

export default useFirebase;
