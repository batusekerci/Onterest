import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Ontry {
  title: string;
  body: string;
  member: string;
  date: string;
  club: string;
  subclub: string;
}

@Injectable({
  providedIn: 'root'
})
export class OntryService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  postOntry(ontry: Ontry): Observable<any> {
    return this.http.post(baseURL + 'api/addontry', ontry)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getOntries(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/ontries')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getOntriesOfUser(username: string): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/ontry/user/' + username)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getOntryById(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'api/ontry/id/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteOntry(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/deleteontry/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
