import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {Observable} from 'rxjs';
import {LoginInfo} from '../login/login.component';
import { User } from '../signup/signup.component';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getMembers(): Observable<any[]> {
    return this.http.get<User[]>(baseURL + 'api/members')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(baseURL + 'api/member/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  memberAuthenticate(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(baseURL + 'api/member/authentication', loginInfo)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  adminAuthenticate(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(baseURL + 'api/admin/authentication', loginInfo)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  subadminAuthenticate(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(baseURL + 'api/subadmin/authentication', loginInfo)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
