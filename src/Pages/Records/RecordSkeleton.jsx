import React from "react";
import recordImg from "../../assets/record_image.png";
import { StyledRecordPage, RecordListWrapper } from "./Record.styles";
import { HiOutlineCamera } from "react-icons/hi";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import Button from "../../Components/button/button";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import { CameraButtonContainer } from "../Dashboard/Dashboard.styles";
import Card from "../../Components/RecordCard/Card";
import CardSkeleton from "../../Components/RecordCard/CardSkeleton";

const RecordSkeleton = () => {
  return (
    <StyledRecordPage>
      <TopNavMenu />
      <RecordList />
      <CameraButtonContainer>
        <Button
          variance="logo"
          name={<HiOutlineCamera size={42} color="#fff" />}
          color="#226E27"
        />
      </CameraButtonContainer>
      <BottomNavBar />
    </StyledRecordPage>
  );
};

const RecordList = () => {
  return (
    <RecordListWrapper>
      {new Array(92).fill("").map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </RecordListWrapper>
  );
};

export default RecordSkeleton;
