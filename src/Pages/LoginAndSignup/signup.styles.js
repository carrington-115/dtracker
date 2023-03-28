import styled from "styled-components";

const SignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-container {
    width: 50vw;
    height: 2cm;
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
      width: 95%;
      hr {
        width: 100%;
        height: 10px;
        background-color: #226e27;
      }
    }
    .circles {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      cursor: none;
      .circle {
        width: 35px;
        height: 35px;
        background-color: white;
        margin-right: 5px;
        border-radius: 50%;
        border: 5px solid #226e27;
        &.active {
          background-color: #226e27;
        }
      }
    }
  }
`;

export { SignUpContainer, HeaderNavigation };
