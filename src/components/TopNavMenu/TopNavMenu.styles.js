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

export { NavContainer };
