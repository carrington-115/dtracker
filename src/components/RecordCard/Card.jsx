import React from "react";
import { CardContainer } from "./Card.styles";
import delete_icon from "../../assets/delete.svg";

function Card(props) {
  return (
    <CardContainer>
      <div className="img-container">
        <img src={props.imageLink} alt="record-image" />
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
          <div className="third">
            <img src={delete_icon} alt="delete_icon" />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
