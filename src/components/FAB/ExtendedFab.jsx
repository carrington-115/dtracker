import React from "react";
import { BiCamera } from "react-icons/bi";
import { EFabContainer } from "./Fab.styles";

function ExtendedFab({ fabFunction, text }) {
  return (
    <EFabContainer onClick={fabFunction}>
      <div className="icon">
        <BiCamera />
      </div>
      <p>{text}</p>
    </EFabContainer>
  );
}

export default ExtendedFab;
