import React from 'react';
import Controls from '../components/Controls';
import Staves from '../components/Staves';
import Transport from '../components/Transport';
import { connect } from 'react-redux';
import { togglePlay, changeBpm, toggleNote } from '../actions';
import Howler from 'howler';
const { Howl } = Howler;

class App extends React.Component {

	constructor() {
		super();

		let audioPath = '../../../audio/';

		this.state = {
			transportPos: 0,
			staves: [
				{
					'id': 1,
					'name': 'Kick',
					'sample': audioPath + 'kick.wav',
					'notes': [
						{'pos': 0, 'active': false},
						{'pos': 1, 'active': false},
						{'pos': 2, 'active': false},
						{'pos': 3, 'active': false},
						{'pos': 4, 'active': false},
						{'pos': 5, 'active': false},
						{'pos': 6, 'active': false},
						{'pos': 7, 'active': false}
					]
				},
				{
					'id': 2,
					'name': 'Snare',
					'sample': audioPath + 'snare.wav',
					'notes': [
						{'pos': 0, 'active': false},
						{'pos': 1, 'active': false},
						{'pos': 2, 'active': false},
						{'pos': 3, 'active': false},
						{'pos': 4, 'active': false},
						{'pos': 5, 'active': false},
						{'pos': 6, 'active': false},
						{'pos': 7, 'active': false}
					]
				},
				{
					'id': 3,
					'name': 'Hihat',
					'sample': audioPath + 'hihat.wav',
					'notes': [
						{'pos': 0, 'active': false},
						{'pos': 1, 'active': false},
						{'pos': 2, 'active': false},
						{'pos': 3, 'active': false},
						{'pos': 4, 'active': false},
						{'pos': 5, 'active': false},
						{'pos': 6, 'active': false},
						{'pos': 7, 'active': false}
					]
				}
			]
		}
		this.tick = this.tick.bind(this);
		this.checkNote = this.checkNote.bind(this);
		this.playSample = this.playSample.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
		this.changeTempo = this.changeTempo.bind(this);
		this.clearPattern = this.clearPattern.bind(this);
	}

	componentWillReceiveProps(nextProps, prevProps) {
	    if (nextProps.playing !== this.props.playing) {
	        this.togglePlay(this.props.playing);
	    }
	    if (nextProps.bpm !== this.props.bpm) {
		    this.changeTempo(nextProps.bpm);
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	componentWillMount() {
		let staves = this.props.staves;
		for (var stave of staves) {
			let localStorageRef = localStorage.getItem('rb-pattern-' + stave.id);
			if (localStorageRef) {
				stave.notes = JSON.parse(localStorageRef);
			}
		}
	}

	componentWillUpdate(nextProps, nextState) {
		let staves = nextState.staves;
		for (var stave of staves) {
			localStorage.setItem('rb-pattern-' + stave.id, JSON.stringify(stave.notes));
		}
	}

	tick() {
		let transportPos = this.state.transportPos;
		transportPos++;
		if (transportPos > 7) {
			transportPos = 0;
		}
		this.setState({ transportPos: transportPos });
		this.checkNote();
	}

	checkNote() {
		let transportPos = this.state.transportPos;
		let that = this;
		for (var stave of this.props.staves) {
			for (var note of stave.notes) {
				if (note.active && note.pos === transportPos) {
					that.playSample(stave.sample);
				}
			}
		}
	}

	playSample(sample) {
		let sound = new Howl({
			src: [sample]
		});
		sound.play();
	}

	calculateTempo(bpm) {
		return 60000 / bpm;
	}

	setTempo() {
		this.timerId = setInterval(() => this.tick(), this.calculateTempo(this.props.bpm));
	}

	changeTempo(bpm) {
		if (this.props.playing) {
			clearInterval(this.timerId);
			this.setTempo();
		}
	}

	togglePlay() {
		if (this.props.playing) {
			clearInterval(this.timerId);
			this.setState({ playing: false });
		} else {
			this.setTempo();
			this.setState({ playing: true });
		}
	}

	clearPattern() {
		let staves = this.state.staves;
		for (var stave of staves) {
			for (var note of stave.notes) {
				note.active = false;
			}
		}
		this.setState({ staves: staves });
	}

  	render() {
	    return (
			<div className="machine">
				<div id="staves">
				    <Staves transportPos={this.state.transportPos} staves={this.props.staves} toggleActive={this.props.toggleNote}/>
				    <Transport pos={this.state.transportPos}/>
				    <Controls bpm={this.props.bpm} handleChange={this.props.changeBpm} togglePlay={this.props.togglePlay} playing={this.props.playing} clearPattern={this.clearPattern} />
				</div>
			</div>
	    );
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        playing: state.controls.playing,
        bpm: state.controls.bpm,
        staves: state.drums.staves
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePlay: () => {
            dispatch(togglePlay());
        },
	    changeBpm: (bpm) => {
	        dispatch(changeBpm(bpm));
	    },
	    toggleNote: (row, col) => {
		    dispatch(toggleNote(row, col));
		}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);