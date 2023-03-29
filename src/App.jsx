import "./App.css";
import styled from "styled-components";
import Record from "./Pages/Records/Record";
import RecordSkeleton from "./Pages/Records/RecordSkeleton";

function App() {
  return (
    <div className="App">
      <RecordSkeleton />
    </div>
  );
}

export default App;

const WelcomeBar = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
