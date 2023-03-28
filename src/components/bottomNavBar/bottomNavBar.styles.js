import styled from "styled-components";

const StyledButtomNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4px;
  background-color: #6b766c;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 30px;
    border-radius: 50px;
    background-color: #fff;
  }

  span {
    font-size: 12px;
    line-height: 16px;
    color: white;
  }
`;

export { StyledButtomNav, StyledIcons };
