import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDashComponent } from './shared/components/movie-dash/movie-dash.component';
import { MovieFormComponent } from './shared/components/movie-form/movie-form.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieDashComponent,
    MovieFormComponent,
    MovieCardComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
