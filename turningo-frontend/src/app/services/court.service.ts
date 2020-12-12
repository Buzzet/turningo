import { Injectable } from '@angular/core';
import {Court} from '../models/court';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  constructor(private http: HttpClient) { }

  public getCourts(): Observable<Court[]> {
    return this.http.get<Court[]>('http://localhost:8080/api/courts');
  }

  public addCourt(court: Court): void {
    this.http.post<Court>('http://localhost:8080/api/courts', court).subscribe(resp => {
      console.log('server response');
      console.log(resp);
    });
  }

  deleteCourt(id: any): void {
    this.http.delete('http://localhost:8080/api/courts/' + id).subscribe(resp => {

    });
  }
}
