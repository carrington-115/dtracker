import styled from "styled-components";

const ProfileWarpper = styled.div`
  width: 80%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* gap: 20px; */
  justify-content: space-between;
  padding: 20px 16px;
  .image {
    width: 30vw;
    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }

  .profile-username {
    font-family: Roboto;
    text-align: right;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }

  .profile-title {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  .profile-button-container {
    button {
      font-size: 14px;
      /* padding: 10px 24px; */
      width: 37vw;
      padding: 10px 0;
      background: #b9debb;
      border-radius: 50px;
      color: #233524;
      border: 1px solid #b9debb;
      cursor: pointer;
    }
  }
  .profile-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin: 1cm 0;
`;

const StyledHeader = styled.div`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 12px 0;
`;

const CameraButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 105px;
  right: 16px;
`;

const TypographyStyle = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  height: 140px;
  width: 241px;
  line-break: normal;
  padding: 15px 0;
  color: #6b766c;
`;

export {
  ProfileWarpper,
  DashboardWrapper,
  StyledHeader,
  ButtonWrapper,
  CameraButtonContainer,
  TypographyStyle,
};
