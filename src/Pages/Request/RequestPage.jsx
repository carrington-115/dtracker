import React, { useState, useEffect } from "react";
import { Container } from "./Request.styles";
import Button from "../../components/button/button";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCamera } from "react-icons/bs";
import { auth, firestoreDatabase } from "../../Firebase/Firebase.config";
import { useSelector, useDispatch } from "react-redux";
import Camera from "../../components/Camera/Camera";
import { setVisible } from "../../features/camera/cameraSlice";
import { selectTrackImgUrl } from "../../features/track/trackSlice";
import ApprovalCard from "../../components/ApprovalandErrorCard/ApprovalCard";
import { collection, addDoc } from "firebase/firestore";
import {
  addComment,
  addImageUrl,
  addLocation,
} from "../../features/trackForm/trackFormSlice";
import { useNavigate } from "react-router-dom";

function RequestPage() {
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let trackImageUrl = useSelector(selectTrackImgUrl);

  const handleSendDataToState = () => {
    try {
      dispatch(addComment(message));
      dispatch(addImageUrl(trackImageUrl));
      setShowCard(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSendRequestToDb = async (url, message) => {
    let userID = auth.currentUser.uid;

    try {
      if (userID != null) {
        let requestLocation = collection(
          firestoreDatabase,
          "Requests",
          "common-requests",
          `${userID}`
        );
        let data = {
          requestsUrl: url,
          requestMessage: message,
        };
        await addDoc(requestLocation, data);
        navigate("/view-track");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <div className="page-heading">
        <h1>Place your Request</h1>
      </div>
      <div className="form-input">
        <p>What's your request?</p>
        <textarea
          rows="10"
          placeholder="Your Request message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="tracking-content">
        <p>Do you want to add any other content?</p>
        <div className="btns">
          <Button
            name=" Location"
            textColor="#233524"
            variance="contained"
            color="#B9DEBB"
            startIcon={<TfiLocationPin />}
          />
          <Button
            name=" Image"
            textColor="#233524"
            variance="contained"
            startIcon={<BsCamera />}
            color="#B9DEBB"
            setFuncAction={() => dispatch(setVisible())}
          />
        </div>
      </div>
      <div className="submit-btns">
        <Button
          name="Send your request"
          textColor="#226E27"
          variance="outlined"
          borderColor="#226E27"
          setFuncAction={handleSendDataToState}
        />
      </div>
      <Camera />
      <ApprovalCard
        messageIcon={<img src={trackImageUrl} />}
        message={<h2>Send your Request</h2>}
        showContainer={showCard}
        data={true}
        comments={`Message: ${message}`}
        firstActionButtonName="Send"
        secondActionButtonName="Cancel"
        secondButtonFunc={() => setShowCard(false)}
        backdropFunc={() => setShowCard(false)}
        firstButtonFunc={() => handleSendRequestToDb(trackImageUrl, message)}
      />
    </Container>
  );
}

export default RequestPage;
