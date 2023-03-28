import styled from "styled-components";

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6b766c;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

const StyledModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 387px;
  width: 90%;
  max-width: 348px;
  border-radius: 10px;
  background-color: #fff;

  .modal-message {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    padding: 6px 32px;
  }
`;

export { StyledModalWrapper, StyledModalBox };
