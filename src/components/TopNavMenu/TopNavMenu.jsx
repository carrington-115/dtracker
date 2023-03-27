import React, { useState } from "react";
import {
  DrawerMenuNavigation,
  NavContainer,
  Backdrop,
} from "./TopNavMenu.styles";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { MdTranslate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import { RiFeedbackLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";

function TopNavMenu() {
  const [showBar, setShowBar] = useState(false);
  const callShowBar = () => {
    setShowBar(!showBar);
  };
  const callCloseBar = () => {
    setShowBar(false);
  };
  return (
    <NavContainer show={showBar}>
      <div className="icon-menu" onClick={callShowBar}>
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
      <Backdrop show={showBar} onClick={callCloseBar} />
      <DrawerMenuNavigation show={showBar}>
        <div className="top-part">
          <h4 className="text-style">Menu</h4>
          <div className="close-icon" onClick={callCloseBar}>
            <AiOutlineCloseCircle />
          </div>
        </div>
        <div className="menu-links">
          <div className="nav-page-link">
            <GrHomeRounded /> <span>Dashboard</span>
          </div>
          <div className="nav-page-link">
            <HiOutlineCamera /> <span>Track</span>
          </div>
          <div className="nav-page-link">
            <GoRequestChanges /> <span>Requests</span>
          </div>
          <div className="nav-page-link">
            <AiOutlineFolder /> <span>Records</span>
          </div>
          <div className="nav-page-link">
            <RiFeedbackLine /> <span>Feedback</span>
          </div>
          <div className="nav-page-link">
            <IoMdNotificationsOutline /> <span>Notifications</span>
          </div>
          <div className="nav-page-link">
            <FiHelpCircle /> <span>Help</span>
          </div>
        </div>
      </DrawerMenuNavigation>
    </NavContainer>
  );
}

export default TopNavMenu;
