import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
	selector: 'stave',
	template: `
		<div class="stave">
			<div class="staveName">{{ name }}</div>
			<note *ngFor="let note of notes" (click)="onClick(note)" [active]="note.active"></note>
		</div>
	`
})

export class StaveComponent {
	@Input() name: string;
	@Input() notes: Note[];

	onClick(note: Note): void {
		note.active = !note.active;
	}
}