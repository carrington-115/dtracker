import styled from "styled-components";

const ProfileWarpper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 20px 16px;

  img {
    border-radius: 50%;
    height: 140px;
    width: 140px;
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

  .profile-button_container {
    scale: 1;
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
  align-items: center;
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

const ImageContainer = styled.div`
  border-radius: 50%;
  height: 140px;
  width: 140px;
`;

export {
  ProfileWarpper,
  DashboardWrapper,
  StyledHeader,
  ButtonWrapper,
  CameraButtonContainer,
  TypographyStyle,
  ImageContainer,
};
