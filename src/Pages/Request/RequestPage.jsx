import React from "react";
import { Container } from "./Request.styles";
import Button from "../../components/button/button";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCamera } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
// import { IoClose } from "react-icons/io";
function RequestPage() {
  return (
    <Container>
      <div className="page-heading">
        <h1>Place your Request</h1>
      </div>
      <div className="form-input">
        <p>What's your request?</p>
        <textarea rows="10" placeholder="Your Request message" />
      </div>
      <div className="tracking-content">
        <p>Do you want to add any other content?</p>
        <div className="btns">
          <Button
            name=" Location"
            textColor="#233524"
            variance="contained"
            color="#B9DEBB"
            startIcon={<TfiLocationPin />}
          />
          <Button
            name=" Image"
            textColor="#233524"
            variance="contained"
            startIcon={<BsCamera />}
            color="#B9DEBB"
          />
        </div>
      </div>
      <div className="submit-btns">
        <Button
          name="Send your request"
          textColor="#226E27"
          variance="outlined"
          borderColor="#226E27"
        />
        <button className="cancel-btn">
          <div className="icon">
            <IoMdClose />
          </div>
          <p>Cancel</p>
        </button>
      </div>
    </Container>
  );
}

export default RequestPage;
