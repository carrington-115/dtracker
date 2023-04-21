import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2cm;
  .top {
    width: 100%;
    height: 40vh;
    position: relative;
    .map-container {
      width: 100%;
      height: 30vh;
      border-radius: 0px 0px 20px 20px;
      position: relative;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      .icon {
        width: 48px;
        height: 48px;
        position: absolute;
        bottom: 5%;
        left: 5%;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background-color: black;
          padding: 9px;
        }
        svg {
          width: 100%;
          height: 100%;
          color: white;
        }
      }
    }
    .track-image {
      position: absolute;
      width: 150px;
      height: 150px;
      right: 10%;
      bottom: 10%;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        img {
          width: 98%;
          height: 98%;
          border-radius: 50%;
        }
        &:hover {
          .icon {
            padding: 2px;
            background-color: black;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3px;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          cursor: pointer;
          position: absolute;
          &:hover {
            padding: 2px;
            background-color: black;
          }
          svg {
            width: 80%;
            height: 80%;
            color: white;
          }
        }
      }
    }
    .track-credentials {
      margin-left: 0.5cm;
      margin-top: 1.2cm;
      font-weight: bold;
      p {
        font-size: 18px;
      }
    }
  }
  .center {
    width: 100%;
    margin-top: 2cm;
    display: flex;
    justify-content: center;
    section {
      width: 96%;
      background: #d9d9d9;
      border-radius: 20px;
      padding: 0.5cm;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.5cm 0;
    button {
      margin-bottom: 10px;
      padding: 15.5972px 37.4333px;
      background: #226e27;
      border: none;
      border-radius: 77.9859px;
      color: white;
      cursor: pointer;
      font-size: 18px;
    }
    .outlined {
      border: 1px solid #226e27;
      background-color: transparent;
      color: #226e27;
    }
  }
  
`;

export { Container };
