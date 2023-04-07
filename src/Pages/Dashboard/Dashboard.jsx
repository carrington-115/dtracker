import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import profileImage from "../../assets/profile.png";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import {
  ProfileWarpper,
  DashboardWrapper,
  StyledHeader,
  ButtonWrapper,
  TypographyStyle,
} from "./Dashboard.styles";
import DashBoardSkeleton from "./DashBoardSkeleton";
import Fab from "../../components/FAB/Fab";

// importing firebase functions and objects
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestoreDatabase } from "../../Firebase/Firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [ready, setReady] = useState(true);
  const [name, setName] = useState("");

  // the navigation object from 'react-router-dom
  let navigate = useNavigate();

  // initializing the useEffect
  // async function testGet(id) {
  //   let locationRef = doc(firestoreDatabase, "profile", `${id}`);
  //   let profileData = await getDoc(locationRef);
  //   return profileData.data();
  // }

  useEffect(() => {
    // checking the signed in user state
    onAuthStateChanged(auth, (user) => {
      if (user && document.readyState === "complete") {
        setReady(false);
        // pulling the user data from firebase
        let locationRef = doc(firestoreDatabase, "profile", `${user.uid}`);
        onSnapshot(locationRef, (data) => {
          let received = data.data();
          console.log(received);
          setName(received.username);
        });
      } else if (!user) {
        navigate("/auth");
      } else {
        setReady(true);
      }
    });
  }, []);

  return (
    <DashboardWrapper>
      <Header />
      <Profile profileImage={profileImage} name={name} />

      <ButtonWrapper>
        <Button
          name="Start tracking"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
          setFuncAction={() => navigate("/track")}
        />
        <Button
          name="Start a request"
          variance="contained"
          startIcon={<GoRequestChanges size={24} color="#fff" />}
          color="#4D724F"
          setFuncAction={() => navigate("/request")}
        />
      </ButtonWrapper>

      <Typography />
      <Fab />

      {ready && <DashBoardSkeleton />}
    </DashboardWrapper>
  );
};

const Profile = ({ profileImage, name }) => {
  let navigate = useNavigate();
  return (
    <ProfileWarpper>
      <div className="image">
        <img src={profileImage} alt="profile_img" />
      </div>
      <div className="profile-content">
        <div className="profile-text_content">
          <h1 className="profile-username">{name}</h1>
          <p className="profile-title">You are now a DTracker</p>
        </div>
        <div className="profile-button-container">
          <button onClick={() => navigate("/record")}>View your record</button>
        </div>
      </div>
    </ProfileWarpper>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <span>
        Welcome To <span style={{ color: "#226E27" }}>DTRACKER</span>
      </span>
    </StyledHeader>
  );
};

const Typography = () => {
  return (
    <TypographyStyle>
      Start your tracking history by using DTRACKER tracking and Request feature
    </TypographyStyle>
  );
};

export default Dashboard;
