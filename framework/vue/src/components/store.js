var audioPath = '../../audio/';

var store = {
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

export default store;