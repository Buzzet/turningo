import { Component, OnInit } from '@angular/core';
import {CourtService} from '../services/court.service';
import {Court} from '../models/court';

@Component({
  selector: 'app-fieldsview',
  templateUrl: './fieldsview.component.html',
  styleUrls: ['./fieldsview.component.scss']
})
export class FieldsviewComponent implements OnInit {

  constructor(private courtService: CourtService) { }

  fields: string[] = ['1', '2', '3'];
  courts: Court[] = [];

  ngOnInit(): void {
    this.courtService.getCourts().subscribe(res => {
      this.courts = res;
    });
  }

  onFieldClick(): void {
    const nextNumber: string[] = [(this.fields.length + 1).toString()];
    // @ts-ignore
    this.fields.push(nextNumber);
  }
}
