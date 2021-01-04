import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NewPlayerComponent} from '../new-player/new-player.component';
import {MatchplanService} from '../services/matchplan.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public matchplanService: MatchplanService) { }

  ngOnInit(): void {
  }
  openNewPlayerDialog(): void{
    this.dialog.open(NewPlayerComponent, {
      width: '550px'
    });
  }

  clickBtnSwiss(): void {
    this.matchplanService.matchWithSwissSystem();
  }


}
