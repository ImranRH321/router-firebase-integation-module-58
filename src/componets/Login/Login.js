import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  return (
    <div>
      <h2>Place Login </h2>
      <div>
        <button onClick={()=> signInWithGoogle()}>Google sign in</button>
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
