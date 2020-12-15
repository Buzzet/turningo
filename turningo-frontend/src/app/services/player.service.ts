import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../models/player';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  public addPlayer(player: Player): void{
    this.http.post('http://localhost:8080/api/players', player).subscribe(resp => {
      this.snackBar.open(player.firstName + ' erfolgreich hinzugefügt ✅','', {
        duration: 4000,
      });
    }, errorResponse => {
      this.snackBar.open( ' ❌ ' + errorResponse.error.message + ' ❌ ','', {
        duration: 15000,
      });
    });
  }
}
