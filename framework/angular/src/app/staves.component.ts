import { Component, OnInit } from '@angular/core';
import { StavesService } from './staves.service';
import { Stave } from './stave';

@Component({
	selector: 'staves',
	template: `
		<stave *ngFor="let stave of staves" [name]="stave.name" [notes]="stave.notes"></stave>
	`,
	providers: [StavesService]
})

export class StavesComponent implements OnInit {

	constructor(private stavesService: StavesService) {}

	staves: Stave[];

	getStaves(): void {
		this.staves = this.stavesService.getStaves();
	}

	ngOnInit(): void {
		this.getStaves();
	}
	
}