import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectionComponent } from './projection/projection.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectionComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
