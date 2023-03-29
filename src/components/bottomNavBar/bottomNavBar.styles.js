import styled from "styled-components";

const StyledButtomNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4px;
  background-color: #6b766c;
  position: fixed;
  bottom: 0;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  &:hover {
    .icon-wrapper {
      background-color: white;
    }
    span {
      color: white;
    }
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 30px;
    border-radius: 50px;
    background-color: transparent;
  }

  span {
    font-size: 12px;
    font-family: Roboto;
    line-height: 16px;
    color: black;
  }
`;

export { StyledButtomNav, StyledIcons };
