import React, { useState, useEffect } from "react";
import approve from "../../assets/add_task.svg";
import { Container } from "./cameraStyles.styles";
import { IoMdWarning } from "react-icons/io";
import { AiOutlineExclamation } from "react-icons/ai";

// import the react icons
import { MdFlipCameraAndroid, MdOutlineCamera, MdClose } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { sendImageToStore } from "./cameraFunction";

// the webcam api
import Webcam from "webcam-easy";

// redux objects and states
import { useDispatch, useSelector } from "react-redux";
import {
  setInVisible,
  selectCameraState,
  setVisible,
} from "../../features/camera/cameraSlice";

import {
  getTrackUrl,
  selectTrackImgUrl,
} from "../../features/track/trackSlice";

// firebase imports
import { auth } from "../../Firebase/Firebase.config";
import generateUniqueId from "generate-unique-id";
import ApprovalCard from "../ApprovalandErrorCard/ApprovalCard";
import LoadingPage from "../LoadingPage/LoadingPage";

function Camera() {
  const [snapState, setSnapState] = useState(false); // setting the snap state
  const [imgUrl, setImgUrl] = useState("");
  const [showCard, setShowCard] = useState(false);

  let cameraState = useSelector(selectCameraState); // selecting the camera state
  let dispatch = useDispatch();

  // getting the camera components ids
  let videoElement = document.getElementById("video-element");
  let canvasElement = document.getElementById("canvas-element");

  // the webcam start function
  const handleWebCamStart = async () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    if (webcam !== undefined) {
      await webcam.start();
    }
  };

  // the webcam snap function
  const handleSnapPicture = async () => {
    setSnapState(true); // set the snap state true
    let webcam = new Webcam(videoElement, "user", canvasElement);
    if (webcam !== undefined) {
      let picture = await webcam.snap();
      setImgUrl(picture);
      console.log(`img url: ${imgUrl}`);
    }
  };

  const handleRetakePicture = () => {
    setImgUrl("");
    setSnapState(false);
  };

  const handleApproveImage = () => {
    setShowCard(true);
  };

  // the stop function
  const handleStopCamera = async () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    if (webcam !== undefined) {
      webcam.stop();
    }
    setImgUrl("");
    dispatch(setInVisible());
    setSnapState(false);
    setShowCard(false);
  };

  // handle camera flip function
  const handleFlipCamera = () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    webcam.flip();
  };

  const handleApproveSendFile = async (imgUrl) => {
    // dispatch(setTempUrlEmpty());
    let userEmail = auth.currentUser.email;
    const imgId = generateUniqueId({
      length: 16,
      useLetters: true,
      useNumbers: true,
    });
    await sendImageToStore(userEmail, imgUrl, imgId, dispatch, getTrackUrl); // sends the image to firebase storage
    handleStopCamera();
  };

  useEffect(() => {
    if (cameraState === true) {
      handleWebCamStart();
    }
  });

  return (
    <Container show={snapState} active={cameraState}>
      <div className="camera">
        <div className="vid-div">
          <video id="video-element"></video>
        </div>
        <div className="camera-navigation-pane">
          <nav>
            <div className="icon" onClick={handleFlipCamera}>
              <MdFlipCameraAndroid />
            </div>
            <div className="outer-circle" onClick={handleSnapPicture}>
              <div className="inner-circle">
                <div className="icon-small">
                  <MdOutlineCamera />
                </div>
              </div>
            </div>
            <div className="icon" onClick={handleStopCamera}>
              <MdClose />
            </div>
          </nav>
        </div>
      </div>
      <div className="picture-shot" show={snapState}>
        <div className="canvas-div" show={snapState}>
          <canvas id="canvas-element"></canvas>
        </div>
        <div className="canvas-navigation-pane">
          <nav>
            <div className="icon" onClick={handleApproveImage}>
              <img src={approve} />
            </div>
            <div className="outer-circle">
              <div className="inner-circle" show={snapState}>
                <img className="small-canvas" src={imgUrl} />
              </div>
            </div>
            <div className="icon" onClick={handleRetakePicture}>
              <ImCancelCircle />
            </div>
          </nav>
        </div>
      </div>
      <ApprovalCard
        messageIcon={<IoMdWarning />}
        message="Approve to Proceed tracking with this image"
        firstActionButtonName="Approve"
        secondActionButtonName="Cancel"
        secondButtonFunc={() => setShowCard(false)}
        showContainer={showCard}
        backdropFunc={() => setShowCard(false)}
        firstButtonFunc={handleApproveSendFile(imgUrl)}
      />
      <LoadingPage />
    </Container>
  );
}

export default Camera;
