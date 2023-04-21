import styled from "styled-components";

const StyledButtonWrapper = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18.24px;
    height: 63.7586555480957px;
    padding: 18px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .title {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .contained {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11.55px;
    height: 65.5px;
    min-width: 176px;
    left: 0.95458984375px;
    border-style: none;
    border-radius: 81.25px;
    padding: 16px 39px 16px 39px;
    gap: 8px;
    .title {
      color: #fff;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }

  .outlined {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11.55px;
    height: 63.499996185302734px;
    min-width: 177.90908813476562px;
    top: 100.5px;
    border-radius: 72.15908813476562px;
    padding: 14px 35px 14px 23px;
    box-shadow: none;
  }

  .text {
    height: 40px;
    min-width: 65px;
    left: 20px;
    top: 20px;
    border-radius: 50px;
    padding: 10px 12px 10px 12px;
    border-style: none;

    .title {
      color: #226e27;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 96px;
    max-width: 96px;
    left: 20px;
    top: 20px;
    border-radius: 28px;
    padding: 30px;
    border-style: none;
  }
`;

export { StyledButtonWrapper };
