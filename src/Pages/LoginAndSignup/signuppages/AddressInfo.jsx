import React, { useState, useEffect } from "react";
import { AddressInfoContainer } from "./PagesStyles.styles";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../../../components/button/button";
import { BiArrowBack } from "react-icons/bi";
import ErrorCards from "../../../components/ApprovalandErrorCard/ErrorCards";
import { MdWarning } from "react-icons/md";

// importing redux content and firebase logics and functions
import { auth, firestoreDatabase } from "../../../Firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";

// states from the personal information form
import { selectUserName } from "../../../features/profile/personalInfoSlice";
import { selectPhoneNumber } from "../../../features/profile/personalInfoSlice";
import { useSelector } from "react-redux";

// the navigating instance from react-router-dom
import { useNavigate } from "react-router-dom";

function AddressInfo() {
  let name = useSelector(selectUserName);
  let number = useSelector(selectPhoneNumber);
  console.log(`name:${name} and number: ${number}`);

  // the text input states containers
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [quarter, setQuarter] = useState("");
  const [checkInfo, setCheckInfo] = useState(false);
  const [errorCard, setErrorCard] = useState(false);

  // the navigation instance
  let navigate = useNavigate();

  // the useEffect function is here
  useEffect(() => {
    console.log(checkInfo);
    if (country === "" || city === "" || quarter === "") {
      setCheckInfo(false);
    } else {
      setCheckInfo(true);
    }
  });

  // getting the user and setting the firestore database location and function
  let user = auth.currentUser;
  console.log(user.uid);
  let location = doc(firestoreDatabase, "profile", `${user.uid}`); // the database location to store the data
  let data = {
    username: name,
    phonenumber: number,
    country: country,
    city: city,
    quarter: quarter,
  };
  function handleSendUserProfileData(sendingLocation, sendingData) {
    setDoc(sendingLocation, sendingData);
  }

  // function to handle submitting the form
  async function handleFormSubmit() {
    if (checkInfo === true) {
      await handleSendUserProfileData(location, data);
      navigate("/auth/signup/last-steps");
      setErrorCard(false);
    } else {
      setErrorCard(true);
    }
  }

  return (
    <AddressInfoContainer>
      <form>
        <h2>Address Information</h2>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input
            type="text"
            placeholder="Quarter"
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
          />
        </div>

        <Button
          variance="contained"
          color="#226e27"
          borderColor="#226327"
          name="Proceed"
          setFuncAction={handleFormSubmit}
        />

        <Button
          variance="outlined"
          color="transparent"
          borderColor="#226327"
          name="Proceed"
          textColor="#226327"
          startIcon={<BiArrowBack color="#226327" width="24p" height="24px" />}
          setFuncAction={() => navigate("/auth/signup/address-information")}
        />
      </form>
      <ErrorCards
        messageIcon={<MdWarning />}
        message="You encountered an error! Make sure you entered all the fields"
        firstButtonAction={() => navigate("/auth")}
        information
        firstButtonName="Back to Personal information"
        secondButtonName="Cancel"
        cardState={errorCard}
        secondButtonAction={() => setErrorCard(false)}
      />
    </AddressInfoContainer>
  );
}

export default AddressInfo;
