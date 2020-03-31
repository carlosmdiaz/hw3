import React, { useState } from "react";
import "./DesingContainer.css";

export default function DesignPad(props) {
  const [color, setColor] = useState("gray");

  return (
    <div
      className={props.className}
      onDragOver={ev => {
        ev.preventDefault();
      }}
      onDrop={ev => {
        const color = ev.dataTransfer.getData("color");

        setColor(color);
      }}
      style={{ backgroundColor: color }}
    ></div>
  );
}
