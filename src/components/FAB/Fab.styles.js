import styled from "styled-components";

const ButtonContainer = styled.div`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2.5cm;
  right: 16px;
  z-index: 5;
  background: #226e27;
  .icon {
    svg {
      width: 36px;
      height: 36px;
      color: white;
    }
  }
`;

const EFabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10.71px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21.4214px;
  background: #4d724f;
  padding: 21px;
  width: fit-content;
  .icon {
    width: 33px;
    height: 33px;
    color: white;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 18.7437px;
    line-height: 27px;
    color: white;
  }
`;

export { ButtonContainer, EFabContainer };
