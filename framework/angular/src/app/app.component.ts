import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { StavesService } from './staves.service';
import { Stave } from './stave';
import '../styles.css';
declare const Howl:any;

@Component({
  selector: 'app-root',
  template: `
	<div class="machine">
		<div id="staves">
			<staves></staves>
			<transport [pos]="transportPos"></transport>
			<controls [bpm]="bpm" [playing]="playing" (togglePlay)="togglePlay($event)" (clearPattern)="clearPattern($event)" (updateBpm)="updateBpm($event)"></controls>
		</div>
	</div>
  `,
  providers: [StavesService]
})

export class AppComponent implements OnInit, AfterContentChecked {

	constructor(private stavesService: StavesService) {}

	transportPos: number = 0;
	playing: boolean = false;
	bpm: number = 220;	
	timerId: any;
	staves: Stave[];

	getStaves(): void {
		this.staves = this.stavesService.getStaves();
	}

	ngOnInit(): void {
		this.getStaves();
		for (var stave of this.staves) {
			let localStorageRef = localStorage.getItem('ag-pattern-' + stave.id);
			if (localStorageRef) {
				stave.notes = JSON.parse(localStorageRef);
			}
		}
	}

	ngAfterContentChecked(): void {
		for (var stave of this.staves) {
			localStorage.setItem('ag-pattern-' + stave.id, JSON.stringify(stave.notes));
		}
	}

	setTimer(): void {
		this.timerId = setInterval(() => this.tick(), this.calculateTempo(this.bpm));
	}

	tick(): void {
		this.transportPos++;
		if (this.transportPos > 7) {
			this.transportPos = 0;
		}
		this.checkNote();
	}

	checkNote(): void {
		for (var stave of this.staves) {
			for (var note of stave.notes) {
				if (note.active && note.pos === this.transportPos) {
					this.playSample(stave.sample);
				}
			}
		}
	}

	playSample(sample: string): void {
		let sound = new Howl({
			src: [sample]
		});
		sound.play();
	}

	calculateTempo(bpm: number): number {
		return 60000 / bpm;
	}

	togglePlay() {
		this.playing = !this.playing;
		if (this.playing) {
			this.setTimer();
		} else {
			clearInterval(this.timerId);
		}
	}

	clearPattern() {
		for (var stave of this.staves) {
			for (var note of stave.notes) {
				note.active = false;
			}
		}
	}

	updateBpm(bpm: number) {
		this.bpm = bpm;	
		if (this.playing) {
			clearInterval(this.timerId);
			this.setTimer();
		}
	}
}
