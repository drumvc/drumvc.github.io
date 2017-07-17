import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
})
export class ControlsComponent {

	@Input() bpm: number;
	@Input() playing: boolean;

	@Output() togglePlay: EventEmitter<any> = new EventEmitter<any>();
	@Output() clearPattern: EventEmitter<any> = new EventEmitter<any>();
	@Output() updateBpm: EventEmitter<any> = new EventEmitter<any>();

	toggle(): void {
		this.togglePlay.emit();
	}

	clear(): void {
		this.clearPattern.emit();
	}

	changeBpm(bpm: number): void {
		this.updateBpm.emit(bpm);
	}

}
