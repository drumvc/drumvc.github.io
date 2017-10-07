import { Component, Input } from "@angular/core";
import { Note } from "../note";

@Component({
  selector: "stave",
  templateUrl: "./stave.component.html"
})
export class StaveComponent {
  @Input() name: string;
  @Input() notes: Note[];

  onClick(note: Note): void {
    note.active = !note.active;
  }
}
