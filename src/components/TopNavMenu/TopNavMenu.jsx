import React from "react";
import { NavContainer } from "./TopNavMenu.styles";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { MdTranslate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

function TopNavMenu() {
  return (
    <NavContainer>
      <div className="icon-menu">
        <AiOutlineMenu className="menu" />
      </div>
      <div className="logo">
        <img src={logo} className="logo" />
      </div>

      <div className="right-icons">
        <div className="icon">
          <MdTranslate className="translate-icons" />
        </div>
        <div className="icon">
          <CgProfile className="profile-icons" />
        </div>
        <div className="icon">
          <IoMdNotificationsOutline className="notification-icons" />
        </div>
      </div>
    </NavContainer>
  );
}

export default TopNavMenu;
