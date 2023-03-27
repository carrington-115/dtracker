import "./App.css";
import { HiOutlineCamera } from "react-icons/hi";
import BottomNavBar from "./Components/bottomNavBar/bottomNavBar";
import Button from "./Components/button/button";

function App() {
  return (
    <div className="App">
      <BottomNavBar />
      <div>
        <Button
          name="outlined"
          variance="outlined"
          startIcon={<HiOutlineCamera />}
        />
        <Button
          name="Create Your Account"
          variance="contained"
          color="#226E27"
        />
        <Button name="text Button" variance="text" />
        <Button variance="logo" name={<HiOutlineCamera size={23} />} />
      </div>
    </div>
  );
}

export default App;
