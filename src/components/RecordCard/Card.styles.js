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

const NotificationCardContainer = styled(CardContainer)`
  background-color: white;
  color: black;
  width: 90%;
  padding: 0.5cm 0;
  justify-content: center;
  gap: 0.25cm;
  cursor: pointer;
  border: 1px solid black;

  .img-container {
    width: 20%;
    padding: 0.4cm;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 80%;
      height: 80%;
    }
  }
  .text-content {
    color: black;
    width: 60%;
    .alt-components {
      color: black;
      .first {
        button {
          color: black;
          border-color: black;
        }
      }
    }
  }
`;

const NotificationCardSkeletonContainer = styled(CardContainer)`
  background-color: white;
  color: black;
  width: 90%;
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;

  .img-container {
    width: 20%;
    padding: 0.4cm;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 80%;
      height: 80%;
    }
  }
  .text-content {
    color: black;
    width: 60%;
    .alt-components {
      display: flex;
      flex-direction: column;

      .second {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`;

export {
  CardContainer,
  NotificationCardContainer,
  NotificationCardSkeletonContainer,
};
