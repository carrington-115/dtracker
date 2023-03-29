import "./App.css";
import styled from "styled-components";

function App() 
  return <WelcomeBar className="App">NEW TEST</WelcomeBar>;

}
// name, variance, startIcon, endIcon, color, borderColor

export default App;

const WelcomeBar = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
