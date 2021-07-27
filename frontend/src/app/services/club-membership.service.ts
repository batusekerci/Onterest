import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class Membership {
  author: string;
  clubName: string;
  star: number;
}
@Injectable({
  providedIn: 'root'
})
export class ClubMembershipService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
  joinClub(member: Membership): Observable<any>{
    return this.http.post(baseURL + 'api/memberofclub', member)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getMembers(): Observable<any[]>{
    return this.http.get<any[]>(baseURL + 'api/memberofclubs')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getMemberClubs(name: string): Observable<any[]>{
    return this.http.get<any[]>(baseURL + 'api/memberofclubs/member/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getClubMembers(name: string): Observable<any[]>{
    return this.http.get<any[]>(baseURL + 'api/memberofclubs/club/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));

  }

  deleteMemberofClub(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/memberofclub/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
