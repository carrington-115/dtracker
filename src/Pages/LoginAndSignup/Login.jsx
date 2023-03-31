import React from "react";
import Button from "../../components/button/button";
import { LoginContainer } from "./Login.styles";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function Login() {
  let navigate = useNavigate();

  // setting the google sign in credentials
  const provider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <LoginContainer>
      <div className="login-head">
        <div className="line">
          <hr />
        </div>
        <p>Login</p>
        <div className="line">
          <hr />
        </div>
      </div>
      <Button
        variance="contained"
        color="#226E27"
        borderColor="#226E27"
        name="Login"
        setFuncAction={() => {
          navigate("/auth/login");
        }}
      />
      <p className="forgot-password">Forgot Password?</p>
      <div className="login-head">
        <div className="line">
          <hr />
        </div>
        <p>or</p>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="external-login-btns">
        <div type="button" className="btn" onClick={signinWithGoogle}>
          <BsGoogle />
          <span>Sign in with Google</span>
        </div>
        <div className="btn">
          <ImFacebook />
          <span>Sign in with Facebook</span>
        </div>
        <div className="btn">
          <FaYahoo />
          <span>Sign in with Yahoo</span>
        </div>
      </div>

      <Button
        variance="contained"
        color="#226E27"
        borderColor="#226E27"
        name="Create your Account"
      />
    </LoginContainer>
  );
}

export default Login;
