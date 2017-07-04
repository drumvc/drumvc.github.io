import { Injectable } from '@angular/core';
import { Stave } from './stave';

const audioPath = '../../../audio/';
const kick = audioPath + 'kick.wav';
const snare = audioPath + 'snare.wav';
const hihat = audioPath + 'hihat.wav';

const STAVES: Stave[] = [
	{ 
		id: 1,
		name: 'Kick',
		sample: kick,
		notes: [
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
		id: 2,
		name: 'Snare',
		sample: snare,
		notes: [
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
		id: 3,
		name: 'Hihat',
		sample: hihat,
		notes: [
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
];

@Injectable()
export class StavesService {
	getStaves(): Stave[] {
		return STAVES;
	}
}