import "./App.css";
import { BsCheckCircle } from "react-icons/bs";
import Modal from "./Components/modal/modal";
import Button from "./Components/button/button";

function App() {
  return (
    <div className="App">
      <Modal
        icon={<BsCheckCircle color="#226E27" size={96} />}
        message="Your Tracking data has been recorded"
        exitButton={
          <Button name="View Record" variance="contained" color="#226E27" />
        }
        continueButton={
          <Button name="continue To Dashboard" variance="outlined" />
        }
      />
    </div>
  );
}

export default App;
