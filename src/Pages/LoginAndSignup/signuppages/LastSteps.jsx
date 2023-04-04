import React, { useState, useEffect } from "react";
import { LastStepsContainer } from "./PagesStyles.styles";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../../components/button/button";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdWarning } from "react-icons/md";
import ErrorCards from "../../../components/ApprovalandErrorCard/ErrorCards";

// importing the firebase functions and objects
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../../../Firebase/firebase.config";
import { firestoreDatabase } from "../../../Firebase/firebase.config";

// importing the navigation object and function
import { useNavigate } from "react-router-dom";

function LastSteps() {
  const [category, setCategory] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [checkInfo, setCheckInfo] = useState(false);
  const [errorCard, setErrorCard] = useState(false);

  // initializing the navigations object
  const navigate = useNavigate();
  let user = auth.currentUser;
  let location = doc(firestoreDatabase, "profile", `${user.uid}`); // the database location to store the data
  let data = {
    category: category,
    conditions: termsConditions,
  };

  useEffect(() => {
    if (termsConditions === false || category === "none") {
      setCheckInfo(false);
    } else {
      setCheckInfo(true);
    }
  });
  console.log(`category: ${category} conditions: ${termsConditions}`);

  async function handleSubmitLastForm() {
    if (checkInfo === true) {
      await setDoc(location, data);
      navigate("/dashboard");
    } else {
      setErrorCard(true);
    }
  }

  return (
    <LastStepsContainer>
      <form>
        <h2>Last Steps</h2>
        <div className="input-field">
          <div className="icon">
            <AiOutlineUnorderedList />
          </div>
          <select
            id="pet-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="none">--Where do you use dustbins--</option>
            <option value="Homes">Homes</option>
            <option value="quarter">Quarter or community</option>
            <option value="business sites">Business sites</option>
            <option value="Local dump sites">Local dump sites</option>
            <option value="offices">Offices</option>
          </select>
        </div>
        <div className="checkbox-field">
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            checked={termsConditions}
            onClick={() => setTermsConditions(!termsConditions)}
          />
          <label for="conditions">Accept our terms and conditions</label>
        </div>
        <Button
          variance="contained"
          color="#226e27"
          borderColor="#226327"
          name="Proceed"
          setFuncAction={handleSubmitLastForm}
        />

        <Button
          variance="outlined"
          color="transparent"
          borderColor="#226327"
          name="Back"
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
        firstButtonName="Back to Address information"
        secondButtonName="Cancel"
        cardState={errorCard}
        secondButtonAction={() => setErrorCard(false)}
      />
    </LastStepsContainer>
  );
}

export default LastSteps;
