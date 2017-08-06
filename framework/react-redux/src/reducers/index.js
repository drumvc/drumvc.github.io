import { combineReducers } from 'redux';

const audioPath = '../../../audio/';

const controls = (state = { playing: false, bpm: 220, transportPos: 0 }, action) => {
    switch (action.type) {
        case 'TOGGLE_PLAY':
					return Object.assign({}, state, {
					  playing: !state.playing
					});
        case 'CHANGE_BPM': {
					return Object.assign({}, state, {
					  bpm: action.bpm
					});
				}
				case 'ADVANCE_POS': {
					let currentPos = state.transportPos;
					currentPos++;
					if (currentPos > 7) {
						currentPos = 0;
					}
					return Object.assign({}, state, {
						transportPos: currentPos
					});
				}
        default:
          return state;
    }
}

const staves = (state = {
		staves: [
				{
					'id': 0,
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
						{'pos': 7, 'active': false},
					]
				},
				{
					'id': 1,
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
					'id': 2,
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
	}, action) => {
	switch (action.type) {
      case 'TOGGLE_NOTE':
				var staves = [...state.staves];
				let note = staves[action.row]['notes'][action.col];
				let active = note.active;
				staves[action.row]['notes'][action.col]['active'] = !active;
				return Object.assign({}, state, { staves });
      case 'CLEAR_PATTERN':
        var staves = [...state.staves];
        for (var stave of staves) {
					for (var note of stave.notes) {
						note.active = false;
					}
				}
				return Object.assign({}, state, { staves });
      default:
        return state;
  }
}

const reducer = combineReducers({
    controls, staves
});

export default reducer;