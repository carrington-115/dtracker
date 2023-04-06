import styled from "styled-components";

const TrackFormCardContainer = styled.div`
  position: fixed;
  z-index: 30;
  top: 5%;
  bottom: 5%;
  right: 5%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  min-height: 80vh;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  /* box-sizing: border-box; */

  .logo {
    width: 70%;
    margin-top: 0.5cm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .location {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .location-input {
      display: flex;
      align-items: center;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      border: 1px solid #2c3301;
      background: #dfed8a;
      padding: 14px 17px;
      gap: 8px;
      margin: 0.5cm 0;
      width: 70%;
      .icon {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      input {
        width: 70%;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        background: none;
        border: none;
        color: black;
        ::placeholder {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: black;
        }
        &:focus {
          outline: none;
        }
      }
    }
    .location-btn {
      width: 10%;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: flex-start;
        padding: 8px;
        width: 40px;
        height: 40px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        background: #b9debb;
        border: 1px solid #b9debb;
        cursor: pointer;
        .icon {
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-content: center;
          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .img-btn {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5cm;
  }
  .comments {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 0 0.5cm 0;
    textarea {
      border: 1px solid #2c3301;
      border-radius: 5px;
      background: #dfed8a;
      box-sizing: border-box;
      width: 90%;
      height: 100%;
      padding: 0.5cm;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    .cancel-btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      margin: 0.5cm 0;
      background: none;
      border: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #c64700;
      cursor: pointer;
      .icon {
        width: 24px;
        height: 24px;
        svg {
          width: 100%;
          height: 100%;
          color: #c64700;
        }
        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #c64700;
        }
      }
    }
  }
  .last-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    .swims-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      bottom: 1%;
      position: absolute;
      margin-top: 1cm;
      h3 {
        position: absolute;
        top: 40%;
        left: 40%;
        font-size: 10px;
      }
      .logo {
        width: 40vw;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .close-card-btn {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    background: #fbd9c5;
    width: 47px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 3%;
    right: 3%;
    cursor: pointer;
    svg {
      color: black;
      width: 24px;
      height: 24px;
    }
  }
`;

export { TrackFormCardContainer };
