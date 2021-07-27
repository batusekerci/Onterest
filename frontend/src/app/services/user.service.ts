import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {Observable} from 'rxjs';
import {User} from '../signup/signup.component';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/members')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/admins')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSubAdmins(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/subadmins')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getUser(username: string): Observable<any> {
    return this.http.get<any>(baseURL + 'api/member/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(baseURL + 'api/deletemember/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
