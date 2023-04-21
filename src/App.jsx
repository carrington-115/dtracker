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
import TopNavMenu from "./components/TopNavigationMenu/TopNavMenu";
import BottomNavBar from "./components/BottomNavBar/bottomNavBar";
import Record from "./Pages/Records/Record";
import Track from "./Pages/Track WireFrame/Track";
import Notification from "./Pages/Notification/Notification";
import { useSelector } from "react-redux";
import { selectCameraState } from "./features/camera/cameraSlice";
import TrackApproval from "./Pages/Track WireFrame/TrackApproval";

function App() {
  let cameraState = useSelector(selectCameraState);
  console.log(`camera state: ${cameraState}`);

  return (
    <WelcomeBar className="App">
      <Router>
        <TopNavMenu />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="app" element={<AppComponent />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="record" element={<Record />} />
          <Route path="track" element={<Track />} />
          <Route path="view-track" element={<TrackApproval />} />
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

export default App;

const WelcomeBar = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
