import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class Club{
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClubAddService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
  addClub(club: Club): Observable<any>{
    return this.http.post(baseURL + 'api/addclub', club)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getClubList(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/clubs')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getClubInfo(clubname: string): Observable<Club> {
    return this.http.get<any>(baseURL + 'api/club/' + clubname)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  deleteClub(clubname: string): Observable<any> {
    return this.http.delete(baseURL + 'api/deleteclub/' + clubname)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
