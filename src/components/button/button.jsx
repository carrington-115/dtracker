import React from "react";
import { StyledButtonWrapper } from "./button.styles";

const Button = ({
  name,
  textColor,
  variance,
  startIcon,
  endIcon,
  color,
  borderColor,
  setFuncAction,
}) => {
  return (
    <StyledButtonWrapper>
      <button
        type="button"
        className={variance}
        onClick={setFuncAction}
        style={{
          backgroundColor: color,
          border: `2px solid ${borderColor}`,
        }}
      >
        <span>{startIcon}</span>
        <span className="title" style={{ color: `${textColor}` }}>
          {name}
        </span>
        <span>{endIcon}</span>
      </button>
    </StyledButtonWrapper>
  );
};

export default Button;
