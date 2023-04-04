import React, { useEffect } from "react";
import Button from "../../components/button/button";
import { LoginContainer } from "./Login.styles";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";

function Login() {
  let navigate = useNavigate();
  let user = auth.currentUser;
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/auth");
      }
    });
  });

  // setting the google sign in credentials
  const provider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    signInWithRedirect(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
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
        setFuncAction={() => navigate("/auth/signup")}
      />
    </LoginContainer>
  );
}

export default Login;
