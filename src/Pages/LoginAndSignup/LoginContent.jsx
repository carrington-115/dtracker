import React from "react";
import { LoginContentContainer } from "./LoginContent.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Button from "../../components/button/button";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";

function LoginContent() {
  return (
    <LoginContentContainer>
      <div className="login-head">
        <div className="line">
          <hr />
        </div>
        <p>Login</p>
        <div className="line">
          <hr />
        </div>
      </div>
      <form>
        <div className="input-field">
          <div className="icon">
            <AiOutlineMail />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input type="password" placeholder="Password" />
        </div>
        <p className="forgot-psd">Forgot Password?</p>
        <div className="btns">
          <Button
            variance="contained"
            color="#226e27"
            borderColor="#226e27"
            name="Login"
          />
          <Button
            variance="outlined"
            color="transparent"
            borderColor="#226e27"
            name="Sign up instead?"
            textColor="#226e27"
          />
        </div>
      </form>

      <div className="login-head">
        <div className="line">
          <hr />
        </div>
        <p>Login</p>
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
    </LoginContentContainer>
  );
}

export default LoginContent;
