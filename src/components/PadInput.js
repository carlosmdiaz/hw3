import React from "react";
import "./DesingContainer.css";

const DesignBoard = props => {
  return (
    <div id="colorbox" className="pad-left">
      <button
        id="bt1"
        className="left-bt-color1"
        value="blue"
        draggable={props.activated}
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "blue");
        }}
      >
        Blue
      </button>

      <button
        id="bt2"
        className="left-bt-color2"
        value="red"
        draggable={props.activated}
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "red");
        }}
      >
        Red
      </button>

      <button
        id="bt3"
        className="left-bt-color3"
        value="yellow"
        draggable={props.activated}
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "yellow");
        }}
      >
        Yellow
      </button>
      <br />
    </div>
  );
};
export default DesignBoard;
