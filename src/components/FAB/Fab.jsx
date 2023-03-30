import React from "react";
import { ButtonContainer } from "./Fab.styles";
import { HiOutlineCamera } from "react-icons/hi";
function Fab() {
  return (
    <ButtonContainer>
      <div className="icon">
        <HiOutlineCamera />
      </div>
    </ButtonContainer>
  );
}

export default Fab;
