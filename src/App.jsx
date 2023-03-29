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

function App() {
  return (
    <WelcomeBar className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthComponent />} />
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
      </Router>
    </WelcomeBar>
  );

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

