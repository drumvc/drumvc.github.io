import React from 'react';
import PropTypes from 'prop-types';
import TransportBlank from './TransportBlank';

class Transport extends React.Component {
	render() {
		return (
			<div className="transportContainer">
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<TransportBlank/>
				<div className="transport">					
					<div className="transportLight transportLightActive" style={{left: this.props.pos * 95 + 'px'}}></div>
				</div>
			</div>
		)
	}
}

Transport.propTypes = {
	pos: PropTypes.number.isRequired
}

export default Transport;