import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SubMembership} from './subclub-membership.service';

@Injectable({
  providedIn: 'root'
})

export class Report {
  user: string;
  club: string;
  subclub: string;
  ontryId: number;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  postReport(report: Report): Observable<any> {
    return this.http.post(baseURL + 'api/addreport', report)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/reports')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getReport(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'api/report/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/deletereport/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
