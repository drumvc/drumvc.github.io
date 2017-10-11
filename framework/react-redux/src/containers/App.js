import React from "react";
import Controls from "../components/Controls";
import Staves from "../components/Staves";
import Transport from "../components/Transport";
import { connect } from "react-redux";
import {
  togglePlay,
  clearPattern,
  changeBpm,
  toggleNote,
  advancePos
} from "../actions";
import Howler from "howler";
const { Howl } = Howler;

class App extends React.Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.checkNote = this.checkNote.bind(this);
    this.playSample = this.playSample.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.changeTempo = this.changeTempo.bind(this);
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

  tick() {
    this.props.advancePos();
    this.checkNote();
  }

  checkNote() {
    let transportPos = this.props.transportPos;
    let that = this;
    for (let stave of this.props.staves) {
      for (let note of stave.notes) {
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
    this.timerId = setInterval(
      () => this.tick(),
      this.calculateTempo(this.props.bpm)
    );
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

  render() {
    return (
      <div className="machine">
        <div id="staves">
          <Staves
            transportPos={this.props.transportPos}
            staves={this.props.staves}
            toggleActive={this.props.toggleNote}
          />
          <Transport pos={this.props.transportPos} />
          <Controls
            bpm={this.props.bpm}
            handleChange={this.props.changeBpm}
            togglePlay={this.props.togglePlay}
            playing={this.props.playing}
            clearPattern={this.props.clearPattern}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    playing: state.controls.playing,
    bpm: state.controls.bpm,
    transportPos: state.controls.transportPos,
    staves: state.staves.staves
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: () => {
      dispatch(togglePlay());
    },
    clearPattern: () => {
      dispatch(clearPattern());
    },
    changeBpm: bpm => {
      dispatch(changeBpm(bpm));
    },
    toggleNote: (row, col) => {
      dispatch(toggleNote(row, col));
    },
    advancePos: () => {
      dispatch(advancePos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
