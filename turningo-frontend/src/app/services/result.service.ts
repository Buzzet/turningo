import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playcard} from '../models/playcard';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  public updatePlaycard(playcard: Playcard): void{
    this.http.put(environment.apiUrl = '/api/playcard', playcard).subscribe(resp => {
    });
  }
}
