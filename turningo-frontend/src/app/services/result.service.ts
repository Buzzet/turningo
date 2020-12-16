import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playcard} from '../models/playcard';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  public updatePlaycard(playcard: Playcard): void{
    this.http.put('http://localhost:8080/api/playcard', playcard).subscribe(resp => {
    });
  }
}
