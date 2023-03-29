import React from "react";
import { AddressInfoContainer } from "./PagesStyles.styles";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../../../components/button/button";
import { BiArrowBack } from "react-icons/bi";
function AddressInfo() {
  return (
    <AddressInfoContainer>
      <form>
        <h2>Address Information</h2>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input type="text" placeholder="Country" />
        </div>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input type="text" placeholder="City" />
        </div>
        <div className="input-field">
          <div className="icon">
            <TfiLocationPin />
          </div>
          <input type="text" placeholder="Quarter" />
        </div>

        <Button
          variance="contained"
          color="#226e27"
          borderColor="#226327"
          name="Proceed"
        />

        <Button
          variance="outlined"
          color="transparent"
          borderColor="#226327"
          name="Proceed"
          textColor="#226327"
          startIcon={<BiArrowBack color="#226327" width="24p" height="24px" />}
        />
      </form>
    </AddressInfoContainer>
  );
}

export default AddressInfo;
