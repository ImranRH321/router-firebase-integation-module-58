import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";
  
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then( () => {
      navigate(from, { replace: true });
    })
  }

  return (
    <div>
      <h2>Place Login </h2>
      <div>
        <button onClick={handleSignInWithGoogle}>Google sign in</button>
      </div>
      <br />
      <form>
        <input type="email" name="" id="" placeholder="Your email" />
        <br />
        <input type="password" name="" id="" placeholder="Your password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
