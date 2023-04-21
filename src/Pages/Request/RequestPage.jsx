import React, { useState, useEffect } from "react";
import { Container } from "./Request.styles";
import Button from "../../components/button/button";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCamera } from "react-icons/bs";
import { auth } from "../../Firebase/Firebase.config";
import { useSelector, useDispatch } from "react-redux";
import Camera from "../../components/Camera/Camera";
import { setVisible } from "../../features/camera/cameraSlice";
import { selectTrackImgUrl } from "../../features/track/trackSlice";
import ApprovalCard from "../../components/ApprovalandErrorCard/ApprovalCard";

function RequestPage() {
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  let dispatch = useDispatch();
  let trackImageUrl = useSelector(selectTrackImgUrl);
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
          setFuncAction={() => setShowCard(true)}
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
      />
    </Container>
  );
}

export default RequestPage;
