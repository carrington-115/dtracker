import React, { useState } from "react";
import { LoginContentContainer } from "./LoginContent.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Button from "../../components/button/button";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";

function LoginContent() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/auth");
      }
    });
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  function handleSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err.message));
  }

  function handleSignInWithPopUp() {
    let provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.message));
  }
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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="forgot-psd">Forgot Password?</p>
        <div className="btns">
          <Button
            variance="contained"
            color="#226e27"
            borderColor="#226e27"
            name="Login"
            setFuncAction={handleSignIn}
          />
          <Button
            variance="outlined"
            color="transparent"
            borderColor="#226e27"
            name="Sign up instead?"
            textColor="#226e27"
            setFuncAction={() => navigate("/auth/signup")}
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
        <div className="btn" onClick={handleSignInWithPopUp}>
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
