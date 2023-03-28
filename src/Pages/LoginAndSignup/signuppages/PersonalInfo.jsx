import React from "react";
import { PersonalInfoContainer } from "./PagesStyles.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import Button from "../../../components/button/button";
function PersonalInfo() {
  return (
    <PersonalInfoContainer>
      <form>
        <h2>Personal Information</h2>
        <div className="input-field">
          <input type="text" placeholder="First name" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Last name" />
        </div>
        <div className="input-field">
          <div className="icon">
            <AiOutlineMail />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <div className="icon">
            <MdOutlinePhone />
          </div>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-field">
          <div className="icon">
            <BsKey />
          </div>
          <input type="password" placeholder="Retype your password" />
        </div>

        <Button
          variance="contained"
          color="#226e27"
          borderColor="#226327"
          name="Proceed"
        />
        <p>Sign in instead?</p>
      </form>
    </PersonalInfoContainer>
  );
}

export default PersonalInfo;
