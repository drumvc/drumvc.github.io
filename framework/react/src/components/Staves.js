import React from 'react';
import PropTypes from 'prop-types';
import Stave from './Stave';

class Staves extends React.Component {

	render() {
		let that = this;
		return (
			<div className="staves">
			{
				this.props.staves.map(function(stave) {
					return <Stave key={stave.id} id={stave.id} toggleActive={that.props.toggleActive} transportPos={that.props.transportPos} name={stave.name} notes={stave.notes} />
				})
			}
			</div>
		)
	}
}

Staves.propTypes = {
	transportPos: PropTypes.number.isRequired,
	staves: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		sample: PropTypes.string.isRequired,
		notes: PropTypes.arrayOf(PropTypes.shape({
			pos: PropTypes.number.isRequired,
			active: PropTypes.bool.isRequired
		}))
	})).isRequired,
	toggleActive: PropTypes.func.isRequired
}

export default Staves;