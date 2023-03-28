import React from "react";
import { StyledModalBox, StyledModalWrapper } from "./modal.styles";

const Modal = ({ icon, message, exitButton, continueButton }) => {
  return (
    <StyledModalWrapper>
      <StyledModalBox>
        <span className="modal-icon_container">{icon}</span>
        <p className="modal-message">{message}</p>
        {exitButton}
        {continueButton}
      </StyledModalBox>
    </StyledModalWrapper>
  );
};

export default Modal;
