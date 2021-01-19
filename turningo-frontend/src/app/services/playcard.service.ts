import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playcard} from '../models/playcard';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaycardService {

  constructor(private http: HttpClient) { }

  playcards: Playcard[] = [];

  getAllPlaycards(): void{
    this.http.get<Playcard[]>(environment.apiUrl + '/api/playcard').subscribe(res => {
      this.playcards = res;
      console.log(res);
    });
  }
}
