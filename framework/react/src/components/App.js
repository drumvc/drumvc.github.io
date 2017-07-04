import React from 'react';
import Controls from './Controls';
import Staves from './Staves';
import Transport from './Transport';
import Howler from 'howler';
const { Howl } = Howler;

class App extends React.Component {

	constructor() {
		super();

		let audioPath = '../../../audio/';

		this.state = {
			transportPos: 0,
			bpm: 220,
			playing: false,
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
		this.toggleActive = this.toggleActive.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	componentWillMount() {
		let staves = this.state.staves;
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

	toggleActive(staveId, pos) {
		let staves = this.state.staves;
		for (var stave of staves) {
			if (stave.id === staveId) {
				for (var note of stave.notes) {
					if (note.pos === pos) {
						note.active = !note.active;
					}
				}
			}
		}
		this.setState({ staves: staves });
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
		for (var stave of this.state.staves) {
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
		this.timerId = setInterval(() => this.tick(), this.calculateTempo(this.state.bpm));
	}

	changeTempo(bpm) {
		this.setState({ bpm: bpm.target.value });
		if (this.state.playing) {
			clearInterval(this.timerId);
			this.setTempo();
		}
	}

	togglePlay() {
		if (this.state.playing) {
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
				    <Staves transportPos={this.state.transportPos} staves={this.state.staves} toggleActive={this.toggleActive}/>
				    <Transport pos={this.state.transportPos}/>
				    <Controls bpm={this.state.bpm} handleChange={this.changeTempo} togglePlay={this.togglePlay} playing={this.state.playing} clearPattern={this.clearPattern} />
				</div>
			</div>
	    );
	}
}

export default App;
