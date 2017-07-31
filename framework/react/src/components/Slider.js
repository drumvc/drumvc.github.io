import React from 'react';
import PropTypes from 'prop-types';

const Slider = (props) => (
	<div className="bpmRange">
		<div className="bpmTitle">BPM</div>
		<input type="range" id="bpm" min="1" max="420" step="1" defaultValue={props.bpm} onChange={props.handleChange} />
		<output htmlFor="bpm" className="bpmOutput">{ props.bpm }</output>
	</div>
)

Slider.propTypes = {
	bpm: PropTypes.number.isRequired,
	handleChange: PropTypes.func.isRequired
}

export default Slider;