import React, { useState } from "react";
import { TrackFormCardContainer } from "./trackformcard.styles";
import dtracker_logo from "../../assets/logo.svg";
import ExtendedFab from "../FAB/ExtendedFab";
import { CgClose } from "react-icons/cg";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../button/button";
import swims_logo from "../../assets/logo.png";
import styled from "styled-components";
import Camera from "../Camera/Camera";
import { useSelector, useDispatch } from "react-redux";
import { setVisible } from "../../features/camera/cameraSlice";
import { selectTrackImgUrl } from "../../features/track/trackSlice";

// import firebase tools
import { firestoreDatabase, auth } from "../../Firebase/Firebase.config";
import { addDoc, collection } from "firebase/firestore";
import ApprovalCard from "../ApprovalandErrorCard/ApprovalCard";

// the react function
function TrackFormCard(props) {
  // calling the redx objects and functions
  let dispatch = useDispatch();
  let trackImgurl = useSelector(selectTrackImgUrl);
  console.log(trackImgurl);
  // collecting the form data
  const [showCard, setShowCard] = useState(false);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const sendTrackToDB = async (url, wasteLocation, comments) => {
    let user = auth.currentUser;
    if (user !== null) {
      let trackRef = collection(
        firestoreDatabase,
        "tracks",
        "common-tracks",
        `${user.uid}`
      );
      let trackID = trackRef.id;
      let trackData = {
        trackImageUrl: url,
        location: wasteLocation,
        comments: comments,
        id: trackID,
      };

      try {
        await addDoc(trackRef, trackData);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <MainContainer show={props.show}>
      <Backdrop onClick={props.callCloseFunction} />
      <TrackFormCardContainer>
        <div className="logo">
          <img src={dtracker_logo} />
        </div>
        <div className="location">
          <div className="location-input">
            <div className="icon">
              <TfiLocationPin />
            </div>
            <input
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="location-btn">
            <button type="button">
              <div className="icon">
                <TfiLocationPin />
              </div>
            </button>
          </div>
        </div>
        <div className="img-btn">
          <ExtendedFab
            text="Take an Image"
            fabFunction={() => dispatch(setVisible())}
          />
        </div>
        <div className="comments">
          <textarea
            placeholder="Comments"
            rows="5"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="btns">
          {/* <button>Proceed and Approve</button> */}
          <Button
            variance="contained"
            borderColor="#226E27"
            color="#226E27"
            name="Approve and Proceed"
            setFuncAction={() => setShowCard(true)}
          />
          <div className="cancel-btn" onClick={props.callCloseFunction}>
            <div className="icon">
              <CgClose />
            </div>
            <span>Cancel</span>
          </div>
        </div>
        <div className="last-container">
          <div className="swims-container">
            <h3>Powered by</h3>
            <div className="logo">
              <img src={swims_logo} />
            </div>
          </div>
        </div>
        <div className="close-card-btn" onClick={props.callCloseFunction}>
          <CgClose />
        </div>
        <Camera />
      </TrackFormCardContainer>
      <ApprovalCard
        messageIcon={<img src={trackImgurl} />}
        message={<h2>Waste tracking</h2>}
        showContainer={showCard}
        data={true}
        location={`Location: ${location}`}
        comments={`comments: ${comments}`}
        firstActionButtonName="Send"
        secondActionButtonName="Cancel"
        secondButtonFunc={() => setShowCard(false)}
        backdropFunc={() => setShowCard(false)}
        firstButtonFunc={sendTrackToDB(trackImgurl, location, comments)}
      />
    </MainContainer>
  );
}

export default TrackFormCard;

const MainContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  /* display: flex; */
  position: absolute;
  z-index: 30;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 100vw;
  z-index: 20;
  background-color: black;
  background: rgba(0, 0, 0, 0.5);
`;
