import { Component, Input } from '@angular/core';

@Component({
	selector: 'note',
	template: `
		<div class="noteContainer">
			<div class="note" [class.active]="active === true"></div>
		</div>
	`
})

export class NoteComponent {
	@Input() active: boolean;
}