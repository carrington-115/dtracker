import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { HiOutlineCamera } from "react-icons/hi";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";

import {
  ProfileWarpper,
  DashboardWrapper,
  CameraButtonContainer,
} from "./Dashboard.styles";
import Button from "../../components/button/button";

const DashboardSkeleton = () => {
  return (
    <DashboardWrapper>
      <TopNavMenu />
      <Skeleton color="#D9D9D9" height={60} width={358} borderRadius={50} />
      <Profile />
      <Skeleton
        color="#D9D9D9"
        style={{ margin: "5px" }}
        count={2}
        height={30}
        width={358}
        borderRadius={50}
      />
      <CameraButtonContainer>
        <Button
          variance="logo"
          name={<HiOutlineCamera size={42} color="#fff" />}
          color="#226E27"
        />
      </CameraButtonContainer>
      <Skeleton
        color="#D9D9D9"
        style={{ marginBottom: "25px" }}
        height={60}
        width={358}
        borderRadius={50}
        count={2}
      />
      <BottomNavBar />
    </DashboardWrapper>
  );
};

export default DashboardSkeleton;

const Profile = () => {
  return (
    <ProfileWarpper>
      <Skeleton color="#D9D9D9" height={140} width={140} borderRadius="50%" />
      <div className="profile-content">
        <div className="profile-text_content">
          <h1 className="profile-username">
            <Skeleton
              color="#D9D9D9"
              height={60}
              width={187}
              borderRadius={50}
            />
          </h1>
          <p className="profile-title">
            <Skeleton
              color="#D9D9D9"
              count={2}
              style={{ margin: "5px" }}
              height={20}
              width={187}
              borderRadius={50}
            />
          </p>
        </div>
      </div>
    </ProfileWarpper>
  );
};
