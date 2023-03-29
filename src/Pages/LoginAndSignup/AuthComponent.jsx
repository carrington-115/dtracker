import React from "react";
import LoginHeader from "../../components/Loginheader/LoginHeader";
import { AuthComponentContainer, LoginPageLinks } from "./authcomponent.styles";
import { Outlet } from "react-router-dom";

function AuthComponent() {
  return (
    <AuthComponentContainer>
      <div className="badge">
        <LoginHeader />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </AuthComponentContainer>
  );
}

export default AuthComponent;
