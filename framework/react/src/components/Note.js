import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleActive(this.props.stave, this.props.pos);
	}

	render() {
		return (
			<div className="noteContainer" onClick={this.handleClick}>
				<div className={"note" + (this.props.active ? ' active' : '')}></div>
			</div>
		)
	}
}

Note.propTypes = {
	stave: PropTypes.number.isRequired,
	transportPos: PropTypes.number.isRequired,
	pos: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	toggleActive: PropTypes.func.isRequired
}

export default Note;