import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NewPlayerComponent} from '../new-player/new-player.component';
import {MatchplanService} from '../services/matchplan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public matchplanService: MatchplanService, public router: Router) { }

  btnTabelle = 'Tabelle';

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

  openTabelle(): void{
    if (this.btnTabelle === 'Tabelle'){
    this.router.navigate(['tabelle']);
    this.btnTabelle = 'Courts';

    } else {
      this.router.navigate(['']);
      this.btnTabelle = 'Tabelle';
    }
  }


}
