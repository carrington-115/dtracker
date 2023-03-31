import React from "react";
import recordImg from "../../assets/record_image.png"
import { StyledRecordPage, RecordListWrapper } from "./Record.styles";
import { HiOutlineCamera } from "react-icons/hi";
import BottomNavBar from "../../components/BottomNavBar/bottomNavBar";
import Button from "../../Components/button/button";
import { CameraButtonContainer } from "../Dashboard/Dashboard.styles";
import Card from "../../Components/RecordCard/Card";
import Fab from "../../components/FAB/Fab";

const Record = () => {
  return (
    <StyledRecordPage>
      <RecordList />
      <Fab />
    </StyledRecordPage>
  );
};

const RecordList = () => {
  return (
    <RecordListWrapper>
      {new Array(10).fill("").map((_, idx) => (
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
