import React from "react";
import styled from "styled-components";
import { ErrorCardContainer } from "./Cards.styles";
import { BiArrowBack } from "react-icons/bi";

function ErrorCards({
  messageIcon,
  message,
  firstButtonAction,
  secondButtonAction,
  firstButtonName,
  secondButtonName,
}) {
  return (
    <MainContainer>
      <ErrorCardContainer>
        <div className="top-close-btn">
          <div className="icon">{<BiArrowBack />}</div>
        </div>
        <div className="message-icon-container">
          <div className="icon">{messageIcon}</div>
        </div>
        <div className="message">
          <p>{message}</p>
        </div>
        <div className="btns">
          <button className="first-action-btn" onClick={firstButtonAction}>
            {firstButtonName}
          </button>
          <button className="second-action-btn" onClick={secondButtonAction}>
            {secondButtonName}
          </button>
        </div>
      </ErrorCardContainer>
      <div className="backdrop" />
    </MainContainer>
  );
}

export default ErrorCards;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .backdrop {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
