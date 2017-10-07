import React from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";

const Controls = props => {
  const playButtonText = props.playing ? "Stop" : "Play";
  return (
    <div className="controls">
      <a href="#" className="button" onClick={props.togglePlay}>
        {playButtonText}
      </a>
      <a href="#" className="button" onClick={props.clearPattern}>
        Clear
      </a>
      <Slider bpm={props.bpm} handleChange={props.handleChange} />
    </div>
  );
};

Controls.propTypes = {
  bpm: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  togglePlay: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  clearPattern: PropTypes.func.isRequired
};

export default Controls;
