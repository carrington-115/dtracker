import React, { useEffect } from "react";
import { WelcomeContainer } from "./welcome.styles";
import dtracker_logo from "../../assets/logo.svg";
import { Oval } from "react-loader-spinner";
import swims_logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserStateActive,
  setUserStateInactive,
  selectCheck,
} from "../../features/userAuthentication/checkSlice";

// start of the function
function Welcome() {
  // initializing variables, states, and constants for this page
  const [ready, setReady] = useState(false); // to check if the site is online and passing
  const [userVerification, setUserVerification] = useState(false); // State to verify if the user has an account
  let navigate = useNavigate();

  // setting redux state managements hooks
  const dispatch = useDispatch();
  let checkState = useSelector(selectCheck);

  // getting the user's data
  let user = auth.currentUser;

  // function to verify the user status account
  useEffect(() => {
    setTimeout(() => {
      if (user != null) {
        setUserVerification(true);
        dispatch(setUserStateActive);
        navigate("/dashboard");
      } else {
        setUserVerification(false);
        dispatch(setUserStateInactive);
        navigate("/auth");
      }
    }, 2000);
  });

  // setting ready by checking if the content is loaded
  console.log(`ready: ${ready} and check: ${checkState}`);
  console.log(user);

  return (
    <WelcomeContainer>
      <div className="welcome-content">
        <h1>Welcome to</h1>
        <div className="logo">
          <img src={dtracker_logo} />
        </div>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
        <p>Please wait.....</p>
      </div>
      <div className="swims-container">
        <h3>Powered by</h3>
        <div className="logo">
          <img src={swims_logo} />
        </div>
      </div>
    </WelcomeContainer>
  );
}

export default Welcome;
