import React from "react";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import Button from "../../Components/button/button";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import { HiOutlineCamera } from "react-icons/hi";
import {
  StyledTrackPage,
  TypographyStyle,
  ButtonWrapper,
} from "./Track.styles";

const Track = () => {
  return (
    <StyledTrackPage>
      <TopNavMenu />
      <Typography />
      <ButtonWrapper>
        <Button
          name="Track Dustbins waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
        />
        <Button
          name="Track community waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
        />

        <Button
          name="Track dump site waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
        />
      </ButtonWrapper>
      <div className="outlined-request_button">
        <Button
          name="Want to send a request?"
          variance="outlined"
          borderColor="#226E27"
        />
      </div>
      <BottomNavBar />
    </StyledTrackPage>
  );
};

const Typography = () => {
  return (
    <TypographyStyle>
      What type of waste site would you like to track
    </TypographyStyle>
  );
};

export default Track;
