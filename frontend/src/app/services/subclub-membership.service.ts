import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Message } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class SubMembership {
  author: string;
  subClubName: string;
  star: number;
}

@Injectable({
  providedIn: 'root'
})

export class SubclubMembershipService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  postSubMembership(subMembership: SubMembership): Observable<any> {
    return this.http.post(baseURL + 'api/memberofsubclubs', subMembership)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getAllSubMemberships(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/memberofsubclubs')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSubMembershipsOfUser(username: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/memberofsubclubs/member/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getMembersOfSubclub(name: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/memberofsubclubs/club/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteSubMembership(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/memberofsubclubs/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
