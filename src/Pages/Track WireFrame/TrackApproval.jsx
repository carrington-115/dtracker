import React from "react";
import { Container } from "./TrackApproval.styles";
import { auth } from "../../Firebase/Firebase.config";
import { MdZoomOutMap } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TrackApproval() {
  let navigate = useNavigate();
  return (
    <Container>
      <div className="top">
        <div className="map-container">
          <div className="icon">
            <MdZoomOutMap />
          </div>
        </div>
        <div className="track-image">
          <div className="image">
            <div className="icon">
              <MdZoomOutMap />
            </div>
          </div>
        </div>
        <div className="track-credentials">
          <p>From: {auth.currentUser.email}</p>
          <p>To: Nobody</p>
        </div>
      </div>
      <div className="center">
        <section>
          <h4>Track comment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
    </Container>
  );
}

export default TrackApproval;
