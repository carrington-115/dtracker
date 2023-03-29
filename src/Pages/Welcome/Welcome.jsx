import React from "react";
import { WelcomeContainer } from "./welcome.styles";
import dtracker_logo from "../../assets/logo.svg";
import { Oval } from "react-loader-spinner";
import swims_logo from "../../assets/logo.png";
function Welcome() {
  return (
    <WelcomeContainer>
      <div className="welcome-content">
        <h1>Welcome to</h1>
        <div className="logo">
          <img src={dtracker_logo} />
        </div>
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
        <p>Please wait.....</p>
      </div>
      <div className="swims-container">
        <h3>Powered by</h3>
        <div className="logo">
          <img src={swims_logo} />
        </div>
      </div>
    </WelcomeContainer>
  );
}

export default Welcome;
