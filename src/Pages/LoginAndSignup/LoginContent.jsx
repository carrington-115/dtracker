import React, { useState, useEffect } from "react";
import { LoginContentContainer } from "./LoginContent.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Button from "../../components/button/button";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaYahoo } from "react-icons/fa";
import ErrorCards from "../../components/ApprovalandErrorCard/ErrorCards";
import { MdWarning } from "react-icons/md";

// firebase imports and the navigation settingsc
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, firestoreDatabase } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

// starting the function
function LoginContent() {
  // initializing the state variables
  const [checkInfo, setCheckInfo] = useState(false); // checking if the information has been entered
  const [errorCard, setErrorCard] = useState(false); // checking if a field has not been entered

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        console.log("user does not exists");
      }
    });
    if (email === "" || password === "") {
      setCheckInfo(false);
    }
  });

  // firebase and the navigation variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  // function to handle the sign-in
  function handleSignIn() {
    if (checkInfo === true) {
      setErrorCard(false);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/dashboard"))
        .catch((err) => console.log(err.message));
      navigate("/dashboard");
    } else {
      setErrorCard(true);
    }
  }

  // function to handle the signin with google by redirecting
  function handleSignInWithPopUp() {
    let provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    let user = auth.currentUser;
    let confirmationLocation = doc(firestoreDatabase, "profile", `${user.uid}`); // the database location to store the data
    let dataSnapShot = getDoc(confirmationLocation);

    if (dataSnapShot.exists()) {
      navigate("/dashboard");
    } else {
      navigate("/auth/signup");
    }
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
      <ErrorCards
        messageIcon={<MdWarning />}
        message="You encountered an error! Make sure you entered all the fields"
        firstButtonAction={() => navigate("/auth")}
        information
        firstButtonName="Back to Login"
        secondButtonName="Cancel"
        cardState={errorCard}
        secondButtonAction={() => setErrorCard(false)}
      />
    </LoginContentContainer>
  );
}

export default LoginContent;
