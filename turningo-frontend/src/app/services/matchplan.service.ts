import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Matchplan} from '../models/matchplan';
import {interval, Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchplanService {

  constructor(private http: HttpClient) {
  }

  public matchplan: Matchplan = {id: '', matchplan: new Map()};

  public matchWithSwissSystem(): void{
    console.log('matching');
    this.http.get<Matchplan>(environment.apiUrl + '/api/matchplan/swiss-system').subscribe(resp => {
      this.matchplan = resp;
      console.log(resp);
    });
  }
}
