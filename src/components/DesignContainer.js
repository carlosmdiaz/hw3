import React from "react";
import "./DesingContainer.css";
import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";

class DesingPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: true
    };
  }

  updateButton = () => {
    this.setState(prevProps => ({ activated: !prevProps.activated }));
  };

  render() {
    const activated = this.state.activated;

    return (
      <div className="pad">
        <h1 className="primary,">Color Board Simulator</h1>
        <button id="edit_btn" className="pad-edit" onClick={this.updateButton}>
          Edit
        </button>
        <DesignBoard />
        <PadInput activated={activated} />
      </div>
    );
  }
}

export default DesingPad;
