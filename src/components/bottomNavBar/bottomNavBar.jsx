import React, { useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import { StyledButtomNav, StyledIcons } from "./bottomNavBar.styles";
import { useLocation } from "react-router-dom";
import { SlHome } from "react-icons/sl";

const BottomNavBar = () => {
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
  return (
    <StyledButtomNav displayMenu={showMenu}>
      <StyledIconsButton
        link="/dashboard"
        name="Home"
        icon={<SlHome length="18.35px" width="16.3px" />}
        // icon={<GrHomeRounded length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        link="/request"
        name="Request"
        icon={<GoRequestChanges length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        link="track"
        name="Track"
        icon={<HiOutlineCamera length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        link="/records"
        name="Records"
        icon={<AiOutlineFolder length="18.35px" width="16.3px" />}
      />
    </StyledButtomNav>
  );
};

const StyledIconsButton = ({ name, icon, link }) => {
  return (
    <StyledIcons to={link} className="icon">
      <div className="icon-wrapper">{icon}</div>
      <span>{name}</span>
    </StyledIcons>
  );
};

export default BottomNavBar;
