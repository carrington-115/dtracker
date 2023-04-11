import React, { useState, useEffect } from "react";
import approve from "../../assets/add_task.svg";
import { Container } from "./cameraStyles.styles";
// import { callCamera } from "./cameraFunction";
import styled from "styled-components";
import { MdFlipCameraAndroid, MdOutlineCamera } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Webcam from "webcam-easy";

function Camera(props) {
  const [cameraState, setCameraState] = useState(false); // setting the camera on state
  const [snapState, setSnapState] = useState(false); // setting the snap state
  const [showCanvas, setShowCanvas] = useState(false);

  // getting the camera components ids
  let videoElement = document.getElementById("video-element");
  let canvasElement = document.getElementById("canvas-element");

  // the webcam start function
  const handleWebCamStart = async () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    await webcam.start();
  };

  // the webcam snap function
  const handleSnapPicture = (pic) => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    setSnapState(true);
    pic = webcam.snap();
    return pic;
  };

  // the stop function
  const handleStopCamera = () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    webcam.stop();
  };

  useEffect(() => {
    if (props.showCamera === true) {
      handleWebCamStart();
    }
  });

  return (
    <Container show={snapState} active={props.showCamera}>
      <div className="camera">
        <div className="vid-div">
          <video id="video-element"></video>
        </div>
        <div className="camera-navigation-pane">
          <nav>
            <div className="icon">
              <MdFlipCameraAndroid />
            </div>
            <div className="outer-circle" onClick={handleSnapPicture}>
              <div className="inner-circle">
                <div className="icon-small">
                  <MdOutlineCamera />
                </div>
              </div>
            </div>
            <div className="icon">
              <BiDotsVerticalRounded />
            </div>
          </nav>
        </div>
      </div>
      <div className="picture-shot" show={showCanvas}>
        <div className="canvas-div" show={showCanvas}>
          <canvas id="canvas-element"></canvas>
        </div>
        <div className="canvas-navigation-pane">
          <nav>
            <div className="icon">
              <img src={approve} />
            </div>
            <div className="outer-circle">
              <div className="inner-circle" show={showCanvas}>
                <canvas className="small-canvas" id="canvas-element"></canvas>
              </div>
            </div>
            <div className="icon">
              <ImCancelCircle />
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Camera;
