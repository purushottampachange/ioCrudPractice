import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDashComponent } from './shared/components/movie-dash/movie-dash.component';
import { MovieFormComponent } from './shared/components/movie-form/movie-form.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashComponent,
    MovieFormComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
