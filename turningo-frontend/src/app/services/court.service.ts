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
}
