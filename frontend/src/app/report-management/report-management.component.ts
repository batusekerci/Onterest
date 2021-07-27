import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.css']
})
export class ReportManagementComponent implements OnInit {
  @ViewChild('managereportform') manageReportFormDirective;
  reason: string;
  action: string;
  username: string;
  manageReportForm: FormGroup;
  report: Report;


  formErrors = {
    'reason': ''
  };

  validationMessages = {
    'reason': {
      'required': 'Reason is required.'
    }
  };


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.manageReportForm = this.fb.group({
      action: '',
      reason: '',
      username: ''
    });

    this.manageReportForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    //TODO
    this.report = this.manageReportForm.value;
    console.log(this.report);

    // Servise bağlanacak reportedUser bilgileri
    // this.sendUser.submitUser(this.user);

    this.manageReportFormDirective.resetForm();
    this.manageReportForm.reset({
      action: "",
      reason: "",
      username: ""
    });
  }


  onValueChanged(data?: any) {
    if (!this.manageReportForm) { return; }
    const form = this.manageReportForm;
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

export class Report {
  action: string;
  reason: string;
  username: string
}