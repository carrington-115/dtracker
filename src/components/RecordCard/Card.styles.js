import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: 91%;
  background: #40765f;
  padding: 5px 10px;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25));
  .img-container {
    width: 25%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-content {
    width: 70%;
    color: white;
    .title {
      font-size: 22px;
      font-weight: 700;
    }
    .body {
      font-weight: 400;
      font-size: 12px;
    }
    .alt-components {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      .first {
        button {
          background-color: transparent;
          padding: 6.74157px 12px;
          border-radius: 33.7079px;
          border: 0.674157px solid #ffffff;
          color: #ffffff;
          font-weight: 400;
          font-size: 9.4382px;
        }
      }
    }
    .second {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 400;
        font-size: 9.4382px;
        margin-right: 5px;
      }
    }
    .third {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 16px;
        height: 18px;
      }
    }
  }
`;

export { CardContainer };
