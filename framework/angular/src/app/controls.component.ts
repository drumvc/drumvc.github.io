import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'controls',
	template: `
		<div class="controls">
			<a href="#" class="button" (click)="toggle()">{{ playing ? 'Stop': 'Play' }}</a> 
			<a href="#" class="button" (click)="clear()">Clear</a> 
			<div class="bpmRange">
				<div class="bpmTitle">BPM</div><input type="range" id="bpm" min="1" max="420" step="1" #ref (change)="changeBpm(ref.value)" /><output for="bpm" class="bpmOutput">{{ bpm }}</output>
			</div>
		</div>
	`
	// I don't put the slider in a new component because communication between grandparent and grandchild requires a service in Angular 2 which seems overkill here.
	// http://stackoverflow.com/questions/36460400/angular-2-how-to-send-events-from-grandchild-to-parent-component
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