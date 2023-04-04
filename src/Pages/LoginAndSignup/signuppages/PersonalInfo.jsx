import React, { useEffect, useState } from "react";
import { PersonalInfoContainer } from "./PagesStyles.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { MdOutlinePhone, MdWarning } from "react-icons/md";
import Button from "../../../components/button/button";
import ErrorCards from "../../../components/ApprovalandErrorCard/ErrorCards";
import { useNavigate } from "react-router-dom";

// pulling the firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase.config";
// react router dom files
import { useDispatch } from "react-redux";

import {
  storeUserName,
  storePhoneNumber,
  setFormDone,
} from "../../../features/profile/personalInfoSlice";

function PersonalInfo() {
  // setting form containers
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [checkInfo, setCheckInfo] = useState(false);
  const [errorCard, setErrorCard] = useState(false);

  // router navigation object
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(checkInfo);
    if (
      fullName === "" ||
      email === "" ||
      phoneNumber === 237 ||
      firstPassword === "" ||
      secondPassword === ""
    ) {
      setCheckInfo(false);
    } else {
      setCheckInfo(true);
    }
  });

  function getPassword(p1, p2) {
    if (p1 == p2) {
      let password = p1;
      return password;
    } else {
      setCheckInfo(false);
    }
  }
  function handleSubmitForm() {
    let password = getPassword(firstPassword, secondPassword);
    if (checkInfo === true && firstPassword === secondPassword) {
      setErrorCard(false);
      dispatch(setFormDone());
      dispatch(storeUserName(fullName));
      dispatch(storePhoneNumber(phoneNumber));
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/auth/signup/address-information");
        })
        .catch(() => {
          (err) => console.log(err.message);
        });
      navigate("/auth/signup/address-information");
    } else {
      setErrorCard(true);
    }
  }
  return (
    <PersonalInfoContainer>
      <form>
        <h2>Personal Information</h2>
        <div className="input-field">
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <AiOutlineMail />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <MdOutlinePhone />
          </div>
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={firstPassword}
            onChange={(e) => setFirstPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input
            type="password"
            placeholder="Retype your password"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
        </div>

        <Button
          variance="contained"
          color="#226e27"
          borderColor="#226327"
          name="Proceed"
          setFuncAction={handleSubmitForm}
        />
        <p onClick={() => navigate("/dashboard")}>Sign in instead?</p>
      </form>
      <ErrorCards
        messageIcon={<MdWarning />}
        message="You encountered an error! Make sure you entered all the fields, and make sure your passwords matched"
        firstButtonAction={() => navigate("/auth")}
        information
        firstButtonName="Back to login"
        secondButtonName="Cancel"
        cardState={errorCard}
        secondButtonAction={() => setErrorCard(false)}
      />
    </PersonalInfoContainer>
  );
}

export default PersonalInfo;
