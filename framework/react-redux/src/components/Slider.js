import React from "react";
import PropTypes from "prop-types";

const Slider = ({ bpm, handleChange }) => (
  <div className="bpmRange">
    <div className="bpmTitle">BPM</div>
    <input
      type="range"
      id="bpm"
      min="1"
      max="420"
      step="1"
      defaultValue={bpm}
      onChange={handleChange}
    />
    <output htmlFor="bpm" className="bpmOutput">
      {bpm}
    </output>
  </div>
);

Slider.propTypes = {
  bpm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Slider;
