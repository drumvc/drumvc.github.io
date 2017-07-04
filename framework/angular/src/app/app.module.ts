import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ControlsComponent } from './controls.component';
import { StavesComponent } from './staves.component';
import { StaveComponent } from './stave.component';
import { NoteComponent } from './note.component';
import { TransportComponent } from './transport.component';
import { TransportBlankComponent } from './transport-blank.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ControlsComponent, StavesComponent, StaveComponent, NoteComponent, TransportComponent, TransportBlankComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
