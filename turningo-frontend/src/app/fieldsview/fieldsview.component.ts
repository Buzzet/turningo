import { Component, OnInit } from '@angular/core';
import {CourtService} from '../services/court.service';
import {Court} from '../models/court';
import {interval} from 'rxjs';
import {MatchplanService} from '../services/matchplan.service';
import {MatDialog} from '@angular/material/dialog';
import {NewPlayerComponent} from '../new-player/new-player.component';
import {SubmitResultsComponent} from '../submit-results/submit-results.component';
import {TournamentDeleteWarningPopupComponent} from '../tournament-delete-warning-popup/tournament-delete-warning-popup.component';

@Component({
  selector: 'app-fieldsview',
  templateUrl: './fieldsview.component.html',
  styleUrls: ['./fieldsview.component.scss']
})
export class FieldsviewComponent implements OnInit {

  constructor(private courtService: CourtService, public matchplanService: MatchplanService, public dialog: MatDialog) { }
  courts: Court[] = [];

  ngOnInit(): void {
    interval(1000)
      .subscribe(() => {
        this.courtService.getCourts().subscribe(res => {
          if (this.courts !== res){
            this.courts = res;
          }
        });
      });
  }

  onFieldClick(): void {
    console.log('clicked');
    const nextNumber: string = (this.courts.length + 1).toString();
    const court: Court = {id: null, courtname: nextNumber};
    this.courtService.addCourt(court);
    this.courts.push(court);
  }

  deleteField(field: Court): void {
    this.courtService.deleteCourt(field.id);
    const index = this.courts.indexOf(field);
    this.courts.splice(index, 1);
  }

  fieldHasAMatch(fieldId: string): boolean{
    // @ts-ignore
    if (this.matchplanService.matchplan.matchplan[fieldId] === undefined){
      return false;
    }
    // @ts-ignore
    if (this.matchplanService.matchplan.matchplan[fieldId].length === 2){
      return true;
    }
    return false;
  }

  getFirstNameByMatchID(id: string, teamNumber: number, playerNumber: number): string {
    if (playerNumber === 0){
    // @ts-ignore
      return this.matchplanService.matchplan.matchplan[id][teamNumber].player1.firstName;
    }
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[id][teamNumber].player2.firstName;
  }

  getLastNameByMatchID(id: string, teamNumber: number, playerNumber: number): string {
    if (playerNumber === 0){
    // @ts-ignore
      return this.matchplanService.matchplan.matchplan[id][teamNumber].player1.lastName;
    }
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[id][teamNumber].player2.lastName;
  }

  getTeamNameByMatchID(id: string, teamNumber: number, playerNumber: number): string {
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[id][teamNumber].team;
  }

  submitResults(id: string): void {
    if (this.fieldHasAMatch(id)){
      const dialogRef = this.dialog.open(SubmitResultsComponent, {
        width: '550px',
        data: { fieldId: id}
      });
      dialogRef.afterClosed().subscribe(x => {
        this.matchplanService.matchWithSwissSystem();
      });
    }
  }

  getWinsByMatchID(id: string, teamNumber: number): string {
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[id][teamNumber].amountWins;
  }

  deleteTournament(): void {
    const dialogRef = this.dialog.open(TournamentDeleteWarningPopupComponent, {
      width: '550px'
    });
  }
}
