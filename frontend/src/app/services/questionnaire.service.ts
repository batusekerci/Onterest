import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class Question{
  name: string;
  question: string;
}

export class QuestionOption{
  selection: string;
  club: string;
  surveyName: string;
}
@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  // tslint:disable-next-line:typedef
  addSurvey(question: Question){
    return this.http.post(baseURL + 'api/addsurvey', question)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  // tslint:disable-next-line:typedef
  addOption(questionOption: QuestionOption){
    return this.http.post(baseURL + 'api/addoption', questionOption)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSurveyList(): Observable<any[]>{
    return this.http.get<any[]>(baseURL + 'api/surveys')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getSurveyById(id: number): Observable<any>{
    return this.http.get<any>(baseURL + 'api/survey/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  // tslint:disable-next-line:typedef
  deleteQuestion(name: string){
    return this.http.delete(baseURL + 'api/deletesurvey/' + name)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  // tslint:disable-next-line:typedef
  deleteOption(selection: string){
    return this.http.delete(baseURL + 'api/deleteoption/' + selection)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
