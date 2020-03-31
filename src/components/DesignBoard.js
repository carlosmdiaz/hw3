import React from "react";
import "./DesingContainer.css";
import DesignPad from "./DesignPad";

const PadInput = () => {
  return (
    <div className="pad-middle">
      <h5>Drag and Drop colors:</h5>
      <DesignPad className="mid-pad-circle1" />
      <DesignPad className="mid-pad-circle2" />
      <DesignPad className="mid-pad-circle3" />
    </div>
  );
};

export default PadInput;
