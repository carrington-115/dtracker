import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginAndSignup/Login";
import Signup from "./Pages/LoginAndSignup/Signup";
import AuthComponent from "./Pages/LoginAndSignup/AuthComponent";
import LoginContent from "./Pages/LoginAndSignup/LoginContent";
import PersonalInfo from "./Pages/LoginAndSignup/signuppages/PersonalInfo";
import AddressInfo from "./Pages/LoginAndSignup/signuppages/AddressInfo";
import LastSteps from "./Pages/LoginAndSignup/signuppages/LastSteps";
import Welcome from "./Pages/Welcome/Welcome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AppComponent from "./Pages/Appcomponent/AppComponent";
import TopNavMenu from "./Components/TopNavMenu/TopNavMenu";
import BottomNavBar from "./Components/bottomNavBar/bottomNavBar";
import Record from "./Pages/Records/Record";
import Track from "./Pages/Track WireFrame/Track";
import Notification from "./Pages/Notification/Notification";
import { useLocation } from "react-router-dom";
function App() {
  return (
    <WelcomeBar className="App">
      <newTopMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="app" element={<AppComponent />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="record" element={<Record />} />
          <Route path="track" element={<Track />} />
          <Route path="notification" element={<Notification />} />
          <Route path="auth" element={<AuthComponent />}>
            <Route index element={<Login />} />
            <Route path="login" element={<LoginContent />} />
            <Route path="signup" element={<Signup />}>
              <Route index element={<PersonalInfo />} />
              <Route path="address-information" element={<AddressInfo />} />
              <Route path="last-steps" element={<LastSteps />} />
            </Route>
          </Route>
        </Routes>
        <BottomNavBar />
      </Router>
    </WelcomeBar>
  );
}
// name, variance, startIcon, endIcon, color, borderColor

function newTopMenu() {
  let location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (location.pathname === "*/auth") {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [location]);
  return (
    <NewTopMenuContainer show={showMenu} className="top-menu">
      <TopNavMenu />
    </NewTopMenuContainer>
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

const NewTopMenuContainer = styled.div``;
