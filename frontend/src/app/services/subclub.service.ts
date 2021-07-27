import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {User} from '../signup/signup.component';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubClub {
  name: string;
  clubName: string;
}
@Injectable({
  providedIn: 'root'
})
export class SubclubService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  postSubClub(subClub: SubClub): Observable<any> {
    return this.http.post(baseURL + 'api/addsubclub', subClub)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSubClubs(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/subclubs')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSubClub(name: string): Observable<any> {
    return this.http.get<any>(baseURL + 'api/subclub/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteSubClub(name: string): Observable<any> {
    return this.http.delete(baseURL + 'api/deletesubclub/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
