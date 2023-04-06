import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ProfileWarpper, DashboardWrapper } from "./Dashboard.styles";
import Fab from "../../components/FAB/Fab";
import styled from "styled-components";

const DashboardSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton color="#D9D9D9" height={60} width={300} borderRadius={50} />
      <Profile />
      <Skeleton
        color="#D9D9D9"
        style={{ marginBottom: "5px" }}
        count={2}
        height={30}
        width={250}
        borderRadius={50}
      />
      <Fab />
      <Skeleton
        color="#D9D9D9"
        style={{ marginTop: "25px" }}
        height={60}
        width={200}
        borderRadius={50}
        count={2}
      />
    </SkeletonContainer>
  );
};

export default DashboardSkeleton;

const Profile = () => {
  return (
    <ProfileContainer>
      <Skeleton color="#D9D9D9" height={100} width={100} borderRadius="50%" />
      <div className="profile-content">
        <div className="profile-text_content">
          <h1 className="profile-username">
            <Skeleton
              color="#D9D9D9"
              height={40}
              width={150}
              borderRadius={50}
            />
          </h1>
          <p className="profile-title">
            <Skeleton
              color="#D9D9D9"
              count={2}
              style={{ margin: "5px" }}
              height={20}
              width={100}
              borderRadius={50}
            />
          </p>
        </div>
      </div>
    </ProfileContainer>
  );
};

const SkeletonContainer = styled(DashboardWrapper)`
  /* position: ${(props) => (props.show ? "fixed" : "none")}; */
  position: fixed;
  background-color: white;
  padding: 1cm 0;
  top: 5%;
`;
const ProfileContainer = styled(ProfileWarpper)``;
