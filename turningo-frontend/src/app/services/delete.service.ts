import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(public http: HttpClient) { }
  deleteTournament(): void{
    this.http.delete(environment.apiUrl + '/tournament').subscribe(ref => {
      console.log(ref);
    });
  }
}
