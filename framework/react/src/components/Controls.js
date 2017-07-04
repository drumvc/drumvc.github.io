import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

class Controls extends React.Component {
	render() {
		const playButtonText = this.props.playing ? 'Stop' : 'Play';
		return (
			<div className="controls">
				<a href="#" className="button" onClick={this.props.togglePlay}>{playButtonText}</a> 
				<a href="#" className="button" onClick={this.props.clearPattern}>Clear</a> 
				<Slider bpm={this.props.bpm} handleChange={this.props.handleChange}/>
			</div>
		)
	}
}

Controls.propTypes = {
	bpm: PropTypes.number.isRequired,
	handleChange: PropTypes.func.isRequired,
	togglePlay: PropTypes.func.isRequired,
	playing: PropTypes.bool.isRequired,
	clearPattern: PropTypes.func.isRequired
}

export default Controls;