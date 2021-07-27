import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BugReport} from '../bug-report/bug-report.component';


@Injectable({
  providedIn: 'root'
})
export class BugReportService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
  postBugReport(bugReport: BugReport): Observable<any> {
    return this.http.post(baseURL + 'api/addbugreport', bugReport)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getBugReports(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'api/bugreports')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getBugReport(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'api/bugreport/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  deleteBugReport(id: number): Observable<any> {
    return this.http.delete(baseURL + 'api/deletebugreport/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
