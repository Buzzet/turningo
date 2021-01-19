import {Component, OnInit, ViewChild} from '@angular/core';
import {PlaycardService} from '../services/playcard.service';
import {Playcard} from '../models/playcard';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.scss']
})
export class TabelleComponent implements OnInit {

  constructor(public playcard: PlaycardService) { }
  displayedColumns: string[] = ['index', 'team', 'amountWins', 'pointDifference'];
  ngOnInit(): void {
    this.playcard.getAllPlaycards();
  }

  displayPlaycard(playcard: Playcard): string{
    console.log(playcard);
    return playcard.team + ': ' + playcard.amountWins + ' , ' + playcard.pointDifference;
  }

  sort(prop: Playcard[]): Playcard[] {
    return prop.sort((a, b) => a.amountWins === b.amountWins ? b.pointDifference - a.pointDifference : b.amountWins - a.amountWins);
  }

}
