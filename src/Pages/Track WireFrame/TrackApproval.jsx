import React, { useEffect, useState } from "react";
import { Container } from "./TrackApproval.styles";
import { auth } from "../../Firebase/Firebase.config";
import { MdZoomOutMap } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectComments,
  selectImage,
  selectLocation,
} from "../../features/trackForm/trackFormSlice";
import styled from "styled-components";

function TrackApproval() {
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [showImage, setShowImage] = useState(false);

  // initialize the state variables
  let comments = useSelector(selectComments);
  let image = useSelector(selectImage);
  let location = useSelector(selectLocation);

  function getUser() {
    let user = auth.currentUser;
    if (user != null) {
      return user.email;
    }
  }

  useEffect(() => {
    console.log(`${comments}, ${image}, ${location}`);
    let email = getUser;
    setUserEmail(email);
  });

  return (
    <MainContainer show={showImage}>
      <div className="top">
        <div className="map-container">
          <div className="icon">
            <MdZoomOutMap />
          </div>
        </div>
        <div className="track-image" onClick={() => setShowImage(true)}>
          <div className="image">
            <img src={image} />
            <div className="icon">
              <MdZoomOutMap />
            </div>
          </div>
        </div>
        <div className="track-credentials">
          <p>From: {userEmail}</p>
          <p>To: Nobody</p>
        </div>
      </div>
      <div className="center">
        <section>
          <h4>Track comment</h4>
          <p>
            <b>Location:</b> {location}
          </p>
          <p>{comments}</p>
        </section>
      </div>
      <div className="bottom">
        <button onClick={() => navigate("/dashboard")}>
          Continue to dashboard
        </button>
        <button className="outlined" onClick={() => navigate("/track")}>
          Continue to Track
        </button>
      </div>
      <div className="image-wide-viewer" show={showImage}>
        <div className="backdrop" onClick={() => setShowImage(false)} />
        <div className="image">
          <img src={image} />
        </div>
      </div>
    </MainContainer>
  );
}

export default TrackApproval;

const MainContainer = styled(Container)`
  .image-wide-viewer {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 30;
    width: 100%;
    height: 100vh;
    display: ${(props) => (props.show ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    .backdrop {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 100;
      background-color: rgba(96, 96, 96, 0.5);
    }
    .image {
      position: fixed;
      z-index: 20;
      width: 90%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
