import React, { useState, useEffect } from "react";
import Button from "../../Components/button/button";
import { HiOutlineCamera } from "react-icons/hi";
import {
  StyledTrackPage,
  TypographyStyle,
  ButtonWrapper,
} from "./Track.styles";
import Fab from "../../components/FAB/Fab";
import TrackFormCard from "../../components/TrackFormCard/TrackFormCard";
import { onAuthStateChanged } from "firebase/auth";
import TrackSkeleton from "./TrackSkeleton";

const Track = () => {
  // setting the state observer
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // checking the signed in user state
    onAuthStateChanged(auth, (user) => {
      if (user && document.readyState === "complete") {
        setReady(false);
      } else if (!user) {
        navigate("/auth");
      } else {
        setReady(true);
      }
    });
  }, []);

  // the render section begins here
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
      <TrackFormCard />
      <TrackSkeleton />
      {/* {ready && <TrackSkeleton />} */}
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
