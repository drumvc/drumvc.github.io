import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Stave extends React.Component {

	render() {
		let that = this;
		return (
			<div className="stave">
				<div className="staveName">{this.props.name}</div>
				{
					this.props.notes.map(function(note, index) {
						return <Note key={index} stave={that.props.id} transportPos={that.props.transportPos} pos={note.pos} active={note.active} toggleActive={that.props.toggleActive} />
					})
				}
			</div>
		)
	}
}

Stave.propTypes = {
	id: PropTypes.number.isRequired,
	toggleActive: PropTypes.func.isRequired,
	transportPos: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	notes: PropTypes.arrayOf(PropTypes.shape({
		pos: PropTypes.number.isRequired,
		active: PropTypes.bool.isRequired
	})).isRequired
}

export default Stave;
