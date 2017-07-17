import { Component, Input } from '@angular/core';

@Component({
  selector: 'transport',
  templateUrl: './transport.component.html',
})
export class TransportComponent {

  @Input() pos: number;

}
