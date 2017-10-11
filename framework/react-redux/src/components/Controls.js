import React from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";

const Controls = ({ bpm, handleChange, togglePlay, clearPattern, playing }) => {
  const playButtonText = playing ? "Stop" : "Play";
  return (
    <div className="controls">
      <a className="button" onClick={togglePlay}>
        {playButtonText}
      </a>
      <a className="button" onClick={clearPattern}>
        Clear
      </a>
      <Slider bpm={bpm} handleChange={e => handleChange(e.target.value)} />
    </div>
  );
};

Controls.propTypes = {
  bpm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  togglePlay: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  clearPattern: PropTypes.func.isRequired
};

export default Controls;
