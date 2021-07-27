import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {BugReportService} from '../services/bug-report.service';


@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent implements OnInit {
  @ViewChild('bugRepForm') bugReportFormDirective;
  bugReportForm: FormGroup;
  message: any;
  errMess: string;

  bug: BugReport;

  formErrors = {

    'message': ''
  };

  validationMessages = {

    'message': {
      'required': 'Message is required.'
    }

  };

  constructor(private route: ActivatedRoute,
    private bugReportService: BugReportService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.bugReportForm = this.fb.group({

      message: ''

    });

    this.bugReportForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    this.message = this.bugReportForm.value;
    console.log(this.message);
    this.bug = new BugReport();
    this.bug.message = this.message.message;

    this.bug.user = window.sessionStorage.username;
    if (this.bug.user === "") {
      alert('Not logged in!');
      return;
    }
    console.log(this.bug);
    this.bugReportService.postBugReport(this.bug).subscribe(response => {
      if (response.status === 'OK') {
        alert('Bug report received!');
        return;
      }
      alert('Bug report could not be received');
    })

    this.bugReportFormDirective.resetForm();
    this.bugReportForm.reset({
      message: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.bugReportForm) { return; }
    const form = this.bugReportForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}

export class BugReport {
  user: string;
  message: string;
}
