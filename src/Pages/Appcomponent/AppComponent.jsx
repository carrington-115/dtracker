import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../../components/BottomNavBar/bottomNavBar";
import TopNavMenu from "../../components/TopNavigationMenu/TopNavMenu";
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
