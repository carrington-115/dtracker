import styled from "styled-components";
import logo from "./assets/logo.png";
import { Oval } from "react-loader-spinner";

function App() {
  return (
    <WelcomeBar className="App">
      <div className="container">
        <h1>DTRACKER</h1>
        <p>Powered by</p>
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="loading-spin">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </div>
        <h4>Coming soon.....</h4>
      </div>
    </WelcomeBar>
  );
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
