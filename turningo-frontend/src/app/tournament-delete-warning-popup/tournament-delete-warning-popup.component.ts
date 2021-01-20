import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DeleteService} from '../services/delete.service';

@Component({
  selector: 'app-tournament-delete-warning-popup',
  templateUrl: './tournament-delete-warning-popup.component.html',
  styleUrls: ['./tournament-delete-warning-popup.component.scss']
})
export class TournamentDeleteWarningPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentDeleteWarningPopupComponent>, private deleteService: DeleteService) { }

  ngOnInit(): void {
  }

  deleteTournament(): void {
    this.deleteService.deleteTournament();
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
