import styled from "styled-components";

const PersonalInfoContainer = styled.div`
  form {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1cm;
    padding-bottom: 1cm;
    h2 {
      font-weight: 600;
      font-size: 28px;
      line-height: 36px;
    }
    button {
      margin: 1cm 0 0.25cm 0;
    }
    p {
      color: #226e27;
      font-weight: normal;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
    .input-field {
      display: flex;
      align-items: center;
      padding: 23px 27px;
      border: 1px solid #226e27;
      border-radius: 15px;
      width: 100%;
      color: #226e27;
      margin: 0.25cm 0;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 16px;
      }
      input {
        border: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 90%;
        ::placeholder {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
const AddressInfoContainer = styled(PersonalInfoContainer)``;
const LastStepsContainer = styled(PersonalInfoContainer)`
  .checkbox-field {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1cm;
    input[type="checkbox"] {
      width: 31px;
      height: 31px;
      border: 5px solid #226e27;
      border-radius: 5px;
    }
    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  #pet-select {
    width: 80%;
    font-size: 18px;
    border: none;
    &:focus {
      outline: none;
    }
    option{
      width: 90%;
    }
  }
`;

export { PersonalInfoContainer, AddressInfoContainer, LastStepsContainer };
