import { Component, OnInit } from '@angular/core';
import {CourtService} from '../services/court.service';
import {Court} from '../models/court';
import {interval} from 'rxjs';

@Component({
  selector: 'app-fieldsview',
  templateUrl: './fieldsview.component.html',
  styleUrls: ['./fieldsview.component.scss']
})
export class FieldsviewComponent implements OnInit {

  constructor(private courtService: CourtService) { }
  courts: Court[] = [];

  ngOnInit(): void {
    interval(10000)
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
}
