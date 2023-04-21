import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 35%;
  align-items: center;
  justify-content: center;
  background-color: white;
  align-self: center;
  padding: 32px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 20;
  .message-icon-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1cm;
    .icon {
      width: 100px;
      height: 95px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid #226e27;
      border-radius: 50%;
      svg {
        width: 48px;
        height: 48px;
        fill: #226e27;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
  }
  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 28px;
      line-height: 36px;
      color: black;
      text-align: center;
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1cm;
    button {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .first-action-btn {
      background: #226e27;
      border-radius: 50px;
      color: white;
      padding: 10px 24px;
      margin-bottom: 0.5cm;
      border: none;
    }
    .second-action-btn {
      border: 1px solid #226e27;
      border-radius: 50px;
      padding: 10px 24px;
      color: #226e27;
      background-color: white;
    }
  }
`;

const ErrorCardContainer = styled(CardContainer)`
  z-index: 12;
  .top-close-btn {
    display: flex;
    width: 100%;
    align-items: left;
    .icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #226322;
      border-radius: 50%;
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
        fill: #226322;
      }
    }
  }
  .message-icon-container {
    .icon {
      border-color: #c64700;
      svg {
        fill: #c64700;
      }
    }
  }
  .btns {
    .first-action-btn {
      background: #c64700;
    }
    .second-action-btn {
      border-color: #c64700;
      color: #c64700;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { CardContainer, Backdrop, ErrorCardContainer };
