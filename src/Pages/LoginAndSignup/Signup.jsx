import React from "react";
import { SignUpContainer, HeaderNavigation } from "./signup.styles";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  return (
    <SignUpContainer>
      <HeaderNavigation>
        <div className="main-container">
          <div className="line">
            <hr />
          </div>
          <div className="circles">
            <PageLink to="/auth/signup" className="circle" />
            <PageLink
              to="/auth/signup/address-information"
              className="circle"
            />
            <PageLink to="/auth/signup/last-steps" className="circle" />
          </div>
        </div>
      </HeaderNavigation>
      <Outlet />
    </SignUpContainer>
  );
}

export default Signup;

const PageLink = styled(NavLink)``;
