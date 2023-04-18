import React from "react";
import styled from "styled-components";
import { CardContainer, Backdrop } from "./Cards.styles";

function ApprovalCard({
  messageIcon,
  message,
  firstActionButtonName,
  firstButtonFunc,
  secondButtonFunc,
  secondActionButtonName,
  showContainer,
  backdropFunc,
}) {
  return (
    <MainContainer show={showContainer}>
      <CardContainer>
        <div className="message-icon-container">
          <div className="icon">{messageIcon}</div>
        </div>
        <div className="message">
          <p>{message}</p>
        </div>
        <div className="btns">
          <button className="first-action-btn" onClick={firstButtonFunc}>
            {firstActionButtonName}
          </button>
          <button className="second-action-btn" onClick={secondButtonFunc}>
            {secondActionButtonName}
          </button>
        </div>
      </CardContainer>
      <Backdrop onClick={backdropFunc} />
    </MainContainer>
  );
}

export default ApprovalCard;

const MainContainer = styled.div`
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
