import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 3cm;
  .page-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5cm;
    h1 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    margin-top: 1cm;
    width: 90%;
    textarea {
      margin-top: 0.25cm;
      border: 1px solid #2c3301;
      border-radius: 10px;
      background: #dfed8a;
      padding: 0.3cm;
    }
  }
  .tracking-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1cm;
    .btns {
      width: 90%;
      display: flex;
      justify-content: space-around;
      margin-top: 0.5cm;
      flex-wrap: wrap;
      button {
        margin-bottom: 0.5cm;
      }
    }
  }
  .submit-btns {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1cm 0;
    button {
      margin-bottom: 0.5cm;
    }
    .cancel-btn {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      color: #c64700;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      gap: 8px;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
      .icon {
        width: 24px;
        height: 24px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export { Container };
