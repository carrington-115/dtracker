import React from "react";
import Button from "../../components/button/button";
import { LoginContainer } from "./Login.styles";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";

function Login() {
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
        <div className="btn">
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
