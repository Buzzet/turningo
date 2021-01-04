import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {PlayerService} from '../services/player.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService, public dialogRef: MatDialogRef<NewPlayerComponent>) { }

  player: Player = {firstName: '', lastName: '', phone: '', eMail: '', team: ''};

  ngOnInit(): void {
  }

  onClickAbbrechen(): void {
    this.dialogRef.close();
  }

  onClickSpeichern(): void {
    this.playerService.addPlayer(this.player);
    this.dialogRef.close();
  }
}
