import { Component, Input } from '@angular/core';

@Component({
	selector: 'transport',
	template: `
		<div class="transportContainer">
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<transport-blank></transport-blank>
			<div class="transport">					
				<div class="transportLight transportLightActive" [ngStyle]="{left: pos * 95 + 'px'}"></div>
			</div>
		</div>	
	`
})

export class TransportComponent {
	@Input() pos: number;
}