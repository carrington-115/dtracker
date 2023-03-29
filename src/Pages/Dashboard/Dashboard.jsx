import React from "react";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import Button from "../../Components/button/button";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import profileImage from "../../assets/profile.png";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";

import {
  ProfileWarpper,
  DashboardWrapper,
  StyledHeader,
  ButtonWrapper,
  CameraButtonContainer,
  TypographyStyle,
} from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <TopNavMenu />
      <Header />
      <Profile profileImage={profileImage} name="John Doe" />
      <BottomNavBar />
      <ButtonWrapper>
        <Button
          name="Start tracking"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
        />
        <Button
          name="Start a request"
          variance="contained"
          startIcon={<GoRequestChanges size={24} color="#fff" />}
          color="#4D724F"
        />
      </ButtonWrapper>
      <CameraButtonContainer>
        <Button
          variance="logo"
          name={<HiOutlineCamera size={42} color="#fff" />}
          color="#226E27"
        />
      </CameraButtonContainer>
      <Typography />
      <BottomNavBar />
    </DashboardWrapper>
  );
};

const Profile = ({ profileImage, name }) => {
  return (
    <ProfileWarpper>
      <img src={profileImage} alt="profile_img" />
      <div className="profile-content">
        <div className="profile-text_content">
          <h1 className="profile-username">{name}</h1>
          <p className="profile-title">You are now a DTracker</p>
        </div>
        <div className="profile-button_container">
          <Button
            variance="contained"
            name="view your record"
            color="#B9DEBB"
          />
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
