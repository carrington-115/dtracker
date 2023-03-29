import React from "react";
import Button from "../../Components/button/button";
import { HiOutlineCamera } from "react-icons/hi";
import {
  StyledTrackPage,
  TypographyStyle,
  ButtonWrapper,
} from "./Track.styles";
import Fab from "../../components/FAB/Fab";
import ExtendedFab from "../../components/FAB/ExtendedFab";

const Track = () => {
  return (
    <StyledTrackPage>
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

      <Fab />
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
