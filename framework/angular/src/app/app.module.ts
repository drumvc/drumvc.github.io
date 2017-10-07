import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ControlsComponent } from "./controls/controls.component";
import { NoteComponent } from "./note/note.component";
import { StaveComponent } from "./stave/stave.component";
import { StavesComponent } from "./staves/staves.component";
import { TransportBlankComponent } from "./transport-blank/transport-blank.component";
import { TransportComponent } from "./transport/transport.component";

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    NoteComponent,
    StaveComponent,
    StavesComponent,
    TransportBlankComponent,
    TransportComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
