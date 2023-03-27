import styled from "styled-components";
import logo from "./assets/logo.png";
import { Oval } from "react-loader-spinner";

function App() {
  return <WelcomeBar className="App">NEW TEST</WelcomeBar>;
}

export default App;

const WelcomeBar = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    h1 {
      font-weight: bold;
      color: #226e27;
    }
    .img-container {
      width: 100%;
      margin-right: 1.5cm;
      position: absolute;
      top: 0;
      margin-top: 0.5cm;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .loading-spin {
      margin-top: 2cm;
    }
  }
`;
