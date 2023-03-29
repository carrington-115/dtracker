import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../../Components/bottomNavBar/bottomNavBar";
import TopNavMenu from "../../Components/TopNavMenu/TopNavMenu";
import { ComponentContainer } from "./AppComponent.styles";

function AppComponent() {
  return (
    <ComponentContainer>
      <div className="top-menu">
        <TopNavMenu />
      </div>
      {Outlet}
      <div className="bottom-menu">
        <BottomNavBar />
      </div>
    </ComponentContainer>
  );
}

export default AppComponent;
