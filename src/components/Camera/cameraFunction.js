import Webcam from "webcam-easy";

/* what is needed for this function

 - videoElement is the attribute for the video
 - the second attribute is for the camera for the user
 - the canvasElement is for the photo of the camera
 - the picture variable is for the storing the picture
 - the snapShotState is to verify if the user has snapped
 - the Camera state is to verify if the picture is on.



*/
export const callCamera = async (
  videoElement,
  canvasElement,
  cameraState,
  snapShotState,
  picture
) => {
  const webcam = new Webcam(videoElement, "user", canvasElement);
  if (cameraState === true) {
    await webcam.start();

    if (snapShotState === true) {
      picture = webcam.snap();
    }
  }
  // else {
  //   await webcam.stop();
  // }
};
