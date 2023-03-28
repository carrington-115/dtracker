import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { GoRequestChanges } from "react-icons/go";
import { StyledButtomNav, StyledIcons } from "./bottomNavBar.styles";

const StyledIconsButton = ({ name, icon }) => {
  return (
    <StyledIcons className="icon">
      <div className="icon-wrapper">{icon}</div>
      <span>{name}</span>
    </StyledIcons>
  );
};

const BottomNavBar = () => {
  return (
    <StyledButtomNav>
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

export default BottomNavBar;
