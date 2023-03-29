import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

  .right-icons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
  }
  .logo {
    width: 141px;
    height: 52px;
    width: 30%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  .icon-menu {
    width: 10%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .logo {
    width: 30%;
  }
  .right-icons {
    width: 30%;
  }
`;

const DrawerMenuNavigation = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 85%;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5cm 0.5cm;
  transform: ${(props) =>
    props.show ? "translateX(-5%)" : "translateX(-100%)"};
  transition: all 0.1s 250ms ease-out;
  .text-style {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
  }
  .top-part {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1cm;
  }
  .close-icon {
    width: 1cm;
    height: 1cm;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 48px;
      height: 48px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .menu-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .nav-page-link {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    width: 280px;
    margin: 0.25cm 0;
    border-radius: 50px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      margin-right: 1cm;
    }
    span {
      font-size: 20px;
    }
    &:hover {
      background: #b9debb;
    }
  }
`;

const Backdrop = styled.div`
  position: ${(props) => (props.show ? "fixed" : "none")};
  transition: all 0.5s 250ms ease-in;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: ${(props) => (props.show ? "2" : "-1")};
`;

export { NavContainer, DrawerMenuNavigation, Backdrop };
