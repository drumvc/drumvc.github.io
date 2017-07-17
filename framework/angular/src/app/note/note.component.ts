import { Component, Input } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
})
export class NoteComponent {

  @Input() active: boolean;

}
