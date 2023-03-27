import React from "react";
import { StyledButtonWrapper } from "./button.styles";

const Button = ({ name, variance, startIcon, endIcon, color }) => {
  return (
    <StyledButtonWrapper>
      <button
        type="button"
        className={variance}
        style={{ backgroundColor: color }}
      >
        <span>{startIcon}</span>
        <span className="title">{name}</span>
        <span>{endIcon}</span>
      </button>
    </StyledButtonWrapper>
  );
};

export default Button;
