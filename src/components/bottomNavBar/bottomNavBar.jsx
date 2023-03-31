import React, { useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import { StyledButtomNav, StyledIcons } from "./bottomNavBar.styles";
import { useLocation } from "react-router-dom";
const BottomNavBar = () => {
  let location = useLocation();
  let pageLocation = `${location.pathname}`;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (
      pageLocation == `/auth` ||
      pageLocation === "/" ||
      pageLocation === "/auth/login" ||
      pageLocation === "/auth/signup"
    ) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [pageLocation, showMenu]);
  return (
    <StyledButtomNav displayMenu={showMenu}>
      <StyledIconsButton
        name="Home"
        icon={<GrHomeRounded length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        name="Request"
        icon={<GoRequestChanges length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        name="Track"
        icon={<HiOutlineCamera length="18.35px" width="16.3px" />}
      />
      <StyledIconsButton
        name="Records"
        icon={<AiOutlineFolder length="18.35px" width="16.3px" />}
      />
    </StyledButtomNav>
  );
};

const StyledIconsButton = ({ name, icon }) => {
  return (
    <StyledIcons className="icon">
      <div className="icon-wrapper">{icon}</div>
      <span>{name}</span>
    </StyledIcons>
  );
};

export default BottomNavBar;
