import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: ${(props) => (props.show ? "50" : "0")};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container };
