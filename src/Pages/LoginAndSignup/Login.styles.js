import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 1cm;
  .login-head {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5cm 0;
    p {
      font-weight: 400px;
      font-size: 16px;
      margin: 0 16px;
    }
    .line {
      width: 100px;
      hr {
        height: 1px;
        width: 100%;
      }
    }
  }
  .forgot-password {
    font-weight: 400;
    font-size: 14px;
    margin: 0.5cm 0;
    color: #226e27;
  }
  .external-login-btns {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 2cm 0;
    .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 5px;
      border: 1px solid #226e27;
      border-radius: 50px;
      margin: 0.25cm 0;
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 0.25cm;
        color: #226e27;
      }
      span {
        font-weight: 400;
        font-size: 14px;
        color: #226e27;
      }
    }
  }
  .create-account {
    margin: 1cm 0 0.5cm 0;
  }
`;

export { LoginContainer };
