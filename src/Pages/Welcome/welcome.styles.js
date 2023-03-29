import styled from "styled-components";

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  .welcome-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 25%;
    h1 {
      font-size: 24px;
    }
    .logo {
      width: 50vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .swims-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10%;
    left: 30%;
    h3 {
      position: absolute;
      top: 20%;
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
`;

export { WelcomeContainer };
