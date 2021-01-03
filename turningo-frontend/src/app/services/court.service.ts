import { Injectable } from '@angular/core';
import {Court} from '../models/court';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  constructor(private http: HttpClient) { }

  public getCourts(): Observable<Court[]> {
    return this.http.get<Court[]>(environment.apiUrl + '/api/courts');
  }

  public addCourt(court: Court): void {
    this.http.post<Court>(environment.apiUrl + '/api/courts', court).subscribe(resp => {
      console.log('server response');
      console.log(resp);
    });
  }

  deleteCourt(id: any): void {
    this.http.delete(environment.apiUrl + '/api/courts/' + id).subscribe(resp => {

    });
  }
}
