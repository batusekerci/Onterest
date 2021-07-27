import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Ontry} from './ontry.service';

@Injectable({
  providedIn: 'root'
})

export class Message {
  sender: string;
  receiver: string;
  content: string;
  sendDate: string;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  postMessage(message: Message): Observable<any> {
    return this.http.post(baseURL + 'api/sendmessage', message)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/messages')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSentMessages(username: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/message/sender/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getReceivedMessages(username: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/message/receiver/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteMessage(id: number): Observable<any>{
    return this.http.delete(baseURL + 'api/deletemessage/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
