import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class Comment{
  body: string;
  ontryId: number;
  member: string;
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
  postComment(comment: Comment): Observable<any>{
    return this.http.post(baseURL + 'api/addcomment', comment)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getCommentList(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/comments')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getUserComments(username: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/comment/user/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getOntryComments(id: number): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/comment/ontry/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  deleteComment(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/deletecomment/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
