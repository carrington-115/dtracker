import styled from "styled-components";
import { NavLink } from "react-router-dom";
const AuthComponentContainer = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  .badge {
    width: inherit;
    height: inherit;
  }
  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .auth-page-header {
    width: 100%;
    position: relative;
    .line-object {
      position: absolute;
      left: 30%;
      svg {
        width: 100%;
      }
    }
  }
`;

const LoginPageLinks = styled(NavLink)``;

export { AuthComponentContainer, LoginPageLinks };
