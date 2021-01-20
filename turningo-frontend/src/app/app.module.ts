import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FieldsviewComponent } from './fieldsview/fieldsview.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NewPlayerComponent } from './new-player/new-player.component';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SubmitResultsComponent } from './submit-results/submit-results.component';
import { TabelleComponent } from './tabelle/tabelle.component';
import {MatTableModule} from '@angular/material/table';
import { TournamentDeleteWarningPopupComponent } from './tournament-delete-warning-popup/tournament-delete-warning-popup.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FieldsviewComponent,
    NewPlayerComponent,
    SubmitResultsComponent,
    TabelleComponent,
    TournamentDeleteWarningPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
