import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const {signWithInGoogle} = useFirebase()
  return (
    <div>
      <h2>Place Login </h2>
      <div>
        <button onClick={signWithInGoogle}>Google sign in</button>
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
