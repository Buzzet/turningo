import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatchplanService} from '../services/matchplan.service';
import {ResultService} from '../services/result.service';
import {Playcard} from '../models/playcard';

@Component({
  selector: 'app-submit-results',
  templateUrl: './submit-results.component.html',
  styleUrls: ['./submit-results.component.scss']
})
export class SubmitResultsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubmitResultsComponent>, @Inject(MAT_DIALOG_DATA) public data: {fieldId: string},
              public matchplanService: MatchplanService, private resultService: ResultService) { }
  pointsTeam1: any = '';
  pointsTeam2: any = '';

  ngOnInit(): void {
  }


  onClickAbbrechen(): void {
    this.dialogRef.close();
  }

  onClickSpeichern(): void {
    // @ts-ignore
    const playcardTeam1: Playcard = this.matchplanService.matchplan.matchplan[this.data.fieldId][0];
    // @ts-ignore
    const playcardTeam2: Playcard = this.matchplanService.matchplan.matchplan[this.data.fieldId][1];
    console.log(this.pointsTeam1);
    if (this.pointsTeam1 > this.pointsTeam2){
      playcardTeam1.amountWins++;
    } else {
      playcardTeam2.amountWins++;
    }
    playcardTeam1.matchesPlayed++;
    playcardTeam2.matchesPlayed++;
    playcardTeam1.pointDifference += this.pointsTeam1 - this.pointsTeam2;
    playcardTeam2.pointDifference += this.pointsTeam2 - this.pointsTeam1;
    this.resultService.updatePlaycard(playcardTeam1);
    this.resultService.updatePlaycard(playcardTeam2);
    this.dialogRef.close();
  }

  getTeam1Name(): string{
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[this.data.fieldId][0].team;
  }

  getTeam2Name(): string{
    // @ts-ignore
    return this.matchplanService.matchplan.matchplan[this.data.fieldId][1].team;
  }
}
