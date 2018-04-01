import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';


import { AppComponent } from './app.component';
import { DragulaSampleComponent } from './dragula-sample/dragula-sample.component';
import { PluralisePipe } from './pluralise-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DragulaSampleComponent,
    PluralisePipe
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
