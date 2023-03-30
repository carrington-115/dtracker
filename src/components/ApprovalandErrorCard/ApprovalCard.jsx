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
}) {
  return (
    <MainContainer>
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
          <button className="second-action-btn" onClick={{ secondButtonFunc }}>
            {secondActionButtonName}
          </button>
        </div>
      </CardContainer>
    </MainContainer>
  );
}

export default ApprovalCard;

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
