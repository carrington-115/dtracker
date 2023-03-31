import React from "react";
import { NotificationCardContainer } from "./Card.styles";
import { IoMdNotifications } from "react-icons/io";

function NotificationCard(props) {
  return (
    <NotificationCardContainer>
      <div className="img-container">
        <IoMdNotifications />
      </div>
      <div className="text-content">
        <h2 className="title">{props.recordType}</h2>
        <h3 className="body">{props.recordBody}</h3>
        <div className="alt-components">
          <div className="first">
            <button>View details</button>
          </div>
          <div className="second">
            <p>12/12/2000</p>
            <p>5:00 PM</p>
          </div>
        </div>
      </div>
    </NotificationCardContainer>
  );
}

export default NotificationCard;
