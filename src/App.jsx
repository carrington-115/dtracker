import "./App.css";
import styled from "styled-components";
import logo from "./assets/logo.png";
import { Oval } from "react-loader-spinner";
import BottomNavBar from "./Components/bottomNavBar/bottomNavBar";

function App() {
  return (
    <div className="App">
      <BottomNavBar />
    </div>
  );
}

export default App;
