import React from "react";
import top_style from "../../assets/top-style.png";
import { LoginHeaderContainer } from "./LoginHeader.styles.";
import line from "../../assets/line.svg";

function LoginHeader() {
  return (
    <LoginHeaderContainer>
      <div className="badge">
        <img src={top_style} alt="top-style-svg" />
      </div>
    </LoginHeaderContainer>
  );
}

export default LoginHeader;
