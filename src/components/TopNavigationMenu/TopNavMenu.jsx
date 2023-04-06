import React, { useState, useEffect } from "react";
import {
  DrawerMenuNavigation,
  NavContainer,
  Backdrop,
  NavPageLinks,
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
import { useLocation } from "react-router-dom";

function TopNavMenu() {
  // the start of the component;
  let location = useLocation();
  let pageLocation = `${location.pathname}`;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (
      pageLocation == `/auth` ||
      pageLocation === "/" ||
      pageLocation === "/auth/login" ||
      pageLocation === "/auth/signup" ||
      pageLocation === "/auth/signup/address-information" ||
      pageLocation === "/auth/signup/last-steps"
    ) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [pageLocation, showMenu]);
  const [showBar, setShowBar] = useState(false);
  function callShowBar() {
    setShowBar(true);
  }
  function callCloseBar() {
    setShowBar(false);
  }
  return (
    <NavContainer show={showBar} displayMenu={showMenu}>
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
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/dashboard"
            className="nav-page-links"
          >
            <GrHomeRounded /> <span>Dashboard</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/track"
            className="nav-page-links"
          >
            <HiOutlineCamera /> <span>Track</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/request"
            className="nav-page-links"
          >
            <GoRequestChanges /> <span>Requests</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/records"
            className="nav-page-links"
          >
            <AiOutlineFolder /> <span>Records</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/feedback"
            className="nav-page-links"
          >
            <RiFeedbackLine /> <span>Feedback</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/notifications"
            className="nav-page-links"
          >
            <IoMdNotificationsOutline /> <span>Notifications</span>
          </NavPageLinks>
          <NavPageLinks
            onClick={() => setShowBar(false)}
            to="/help"
            className="nav-page-links"
          >
            <FiHelpCircle /> <span>Help</span>
          </NavPageLinks>
        </div>
      </DrawerMenuNavigation>
    </NavContainer>
  );
}

export default TopNavMenu;
