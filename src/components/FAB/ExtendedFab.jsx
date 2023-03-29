import React from "react";
import { BiCamera } from "react-icons/bi";
import { EFabContainer } from "./Fab.styles";

function ExtendedFab() {
  return (
    <EFabContainer>
      <div className="icon">
        <BiCamera />
      </div>
      <p>Take an Image</p>
    </EFabContainer>
  );
}

export default ExtendedFab;
