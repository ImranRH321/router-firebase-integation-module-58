import app from "./firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const auth = getAuth(app);

const userRegister = () => {
 const [google, setGoogle] = useState({})
  // useState lal keno dekay--------->
  console.log(google);
  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setGoogle(user); // akane to update kortaci
      })
      .catch(error => {
        console.log(error);
      });
  };

  return loginGoogle;
};

export default userRegister;
