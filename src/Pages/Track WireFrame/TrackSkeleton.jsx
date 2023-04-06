import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { StyledTrackPage, ButtonWrapper } from "./Track.styles";
import styled from "styled-components";

const TrackSkeleton = () => {
  return (
    <TrackSkeletonContainer>
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
    </TrackSkeletonContainer>
  );
};

export default TrackSkeleton;

const TrackSkeletonContainer = styled(StyledTrackPage)`
  position: fixed;
`;
