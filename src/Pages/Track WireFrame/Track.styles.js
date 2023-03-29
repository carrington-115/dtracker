import styled from "styled-components";

const StyledTrackPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  margin-bottom: 4cm;

  .outlined-request_button {
    padding: 55px 0;
  }
`;

const TypographyStyle = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  line-height: 35px;
  line-break: normal;
  letter-spacing: 0.01em;
  text-align: center;
  height: 120px;
  padding: 25px 0;
  width: 247px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 195.76718139648438px;
  min-width: 236px;
  width: 65%;
  left: 75px;
  top: 289px;
  border-radius: 0px;
`;

export { StyledTrackPage, TypographyStyle, ButtonWrapper };
