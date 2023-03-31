import React from "react";
import Button from "../../components/button/button";
import profileImage from "../../assets/profile.png";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { AiFillWarning } from "react-icons/ai";
import {
  ProfileWarpper,
  DashboardWrapper,
  StyledHeader,
  ButtonWrapper,
  TypographyStyle,
} from "./Dashboard.styles";
import Fab from "../../components/FAB/Fab";
import ApprovalCard from "../../components/ApprovalandErrorCard/ApprovalCard";
import ErrorCards from "../../components/ApprovalandErrorCard/ErrorCards";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header />
      <Profile profileImage={profileImage} name="John Doe" />

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

      <Typography />
      <Fab />
      <ErrorCards
        messageIcon={<AiFillWarning />}
        message="Are you sure you want to delete this record?"
        firstButtonName="Yes delete this record"
        secondButtonName="Cancel"
      />
    </DashboardWrapper>
  );
};

const Profile = ({ profileImage, name }) => {
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
          <button>View your record</button>
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
