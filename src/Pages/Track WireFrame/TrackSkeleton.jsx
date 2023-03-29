import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import { StyledTrackPage, ButtonWrapper } from "./Track.styles";

const TrackSkeleton = () => {
  return (
    <StyledTrackPage>
      <TopNavMenu />
      <Skeleton
        color="#D9D9D9"
        style={{ marginBottom: "5px" }}
        height={30}
        width={358}
        borderRadius={50}
        count={3}
      />
      <ButtonWrapper style={{ margin: "55px 0" }}>
        <Skeleton
          color="#D9D9D9"
          style={{ marginBottom: "25px" }}
          height={60}
          width={358}
          borderRadius={50}
          count={3}
        />
      </ButtonWrapper>

      <BottomNavBar />
    </StyledTrackPage>
  );
};

export default TrackSkeleton;
