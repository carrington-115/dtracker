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
import { auth } from "../../Firebase/Firebase.config";

// the react function
const Track = () => {
  // setting the state observer
  const [ready, setReady] = useState(true);
  const [formCard, setFormCard] = useState(false);

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
  });

  const handleShowCard = () => {
    setFormCard(true);
  };

  // the render section begins here
  return (
    <StyledTrackPage>
      {ready && <TrackSkeleton />}

      <Typography />
      <ButtonWrapper>
        <Button
          name="Track Dustbins waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
          setFuncAction={handleShowCard}
        />
        <Button
          name="Track community waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
          setFuncAction={handleShowCard}
        />

        <Button
          name="Track dump site waste"
          variance="contained"
          startIcon={<HiOutlineCamera size={24} color="#fff" />}
          color="#226E27"
          setFuncAction={handleShowCard}
        />
      </ButtonWrapper>
      <TrackFormCard
        show={formCard}
        callCloseFunction={() => setFormCard(false)}
      />
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
