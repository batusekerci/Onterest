import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { User } from '../signup/signup.component';
import { LoginInfo } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }


  getMembers(): Observable<any[]> {
    // if (!this.auth.isLoggedIn()) {
    //   return null;
    // }
    return this.http.get<any[]>(baseURL + 'api/members')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  // isFavorite(id: string): Observable<FavoriteExists> {
  //   if (!this.auth.isLoggedIn()) {
  //     return of({ exists: false, favorites: null });
  //   }
  //   return this.http.get<FavoriteExists>(baseURL + 'favorites/' + id)
  //     .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  // }

  postUser(user: User): Observable<any> {
    return this.http.post(baseURL + 'api/addmember', user)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getUser(username: string): Observable<any> {
    return this.http.get<any>(baseURL + 'api/member/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

}
