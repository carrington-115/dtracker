import React from "react";
import { CardContainer } from "./Card.styles";
import record_image from "../../assets/record_image.png";
import delete_icon from "../../assets/delete.svg";

const records = [
  {
    image: record_image,
    title: "Track records",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti",
  },
  {
    image: record_image,
    title: "Track records",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti",
  },
  {
    image: record_image,
    title: "Track records",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti",
  },
  {
    image: record_image,
    title: "Track records",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti",
  },
  {
    image: record_image,
    title: "Track records",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel vitae potenti",
  },
];
// function Card() {
//   return (
//     <CardContainer>
//       <div className="img-container">
//         <img src={record_image} alt="record-image" />
//       </div>
//       <div className="text-content">
//         <h2 className="title">Track Record</h2>
//         <h3 className="body">
//           Lorem ipsum dolor sit amet consectetur adipiscing elit, sed quis vel
//           vitae potenti
//         </h3>
//         <div className="alt-components">
//           <div className="first">
//             <button>View details</button>
//           </div>
//           <div className="second">
//             <p>12/12/2000</p>
//             <p>5:00 PM</p>
//           </div>
//           <div className="third">
//             <img src={delete_icon} alt="delete_icon" />
//           </div>
//         </div>
//       </div>
//     </CardContainer>
//   );
// }
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
