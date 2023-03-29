import React from "react";
import { LastStepsContainer } from "./PagesStyles.styles";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../../components/button/button";
import { AiOutlineUnorderedList } from "react-icons/ai";
function LastSteps() {
  return (
    <LastStepsContainer>
      <form>
        <h2>Last Steps</h2>
        <div className="input-field">
          <div className="icon">
            <AiOutlineUnorderedList />
          </div>
          <select id="pet-select">
            <option value="">--Please choose a category--</option>
            <option value="waste collector">Waste collector</option>
            <option value="waste disposer">Waste disposers</option>
          </select>
        </div>
        <div className="checkbox-field">
          <input type="checkbox" />
          <label>Accept our terms and conditions</label>
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
    </LastStepsContainer>
  );
}

export default LastSteps;
