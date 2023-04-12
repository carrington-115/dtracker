import React, { useState, useEffect } from "react";
import approve from "../../assets/add_task.svg";
import { Container } from "./cameraStyles.styles";

// import the react icons
import { MdFlipCameraAndroid, MdOutlineCamera, MdClose } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

// the webcam api
import Webcam from "webcam-easy";

// redux objects and states
import { useDispatch, useSelector } from "react-redux";
import {
  setInVisible,
  selectCameraState,
} from "../../features/camera/cameraSlice";

function Camera() {
  const [snapState, setSnapState] = useState(false); // setting the snap state
  const [showCanvas, setShowCanvas] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  // const [flipState, setFlipState] = useState(false);

  let cameraState = useSelector(selectCameraState); // selecting the camera state
  let dispatch = useDispatch();

  // getting the camera components ids
  let videoElement = document.getElementById("video-element");
  let canvasElement = document.getElementById("canvas-element");

  // the webcam start function
  const handleWebCamStart = async () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    await webcam.start();
  };

  // the webcam snap function
  const handleSnapPicture = () => {
    setSnapState(true); // set the snap state true
    let webcam = new Webcam(videoElement, "user", canvasElement);
    let picture = webcam.snap();
    return picture;
  };

  // the stop function
  const handleStopCamera = async () => {
    dispatch(setInVisible());
    let webcam = new Webcam(videoElement, "user", canvasElement);
    await webcam.stop();
  };

  // handle camera flip function
  const handleFlipCamera = () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);
    webcam.flip();
  };

  useEffect(() => {
    if (cameraState === true) {
      handleWebCamStart();
      if (snapState === true) {
        let url = handleSnapPicture();
        setImgUrl(url);
        console.log(imgUrl);
      } else {
        console.log("no image has been taken");
      }
    } else {
      handleStopCamera();
    }
  }, [cameraState, snapState]);

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
            <div className="icon">
              <img src={approve} />
            </div>
            <div className="outer-circle">
              <div className="inner-circle" show={snapState}>
                <img className="small-canvas" src={imgUrl} />
              </div>
            </div>
            <div className="icon" onClick={() => setSnapState(false)}>
              <ImCancelCircle />
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Camera;
