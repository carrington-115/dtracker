import React from "react";
import recordImg from "../../assets/record_prototype_img.png";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import Button from "../../Components/button/button";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import { CameraButtonContainer } from "../Dashboard/Dashboard.styles";
import { StyledRecordPage, RecordListWrapper } from "./Record.styles";
import { HiOutlineCamera } from "react-icons/hi";
import Card from "../../Components/RecordCard/Card";

const Record = () => {
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
        <Card
          key={idx}
          imageLink={recordImg}
          recordType="Tracking Record"
          recordBody="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti"
        />
      ))}
    </RecordListWrapper>
  );
};

export default Record;
