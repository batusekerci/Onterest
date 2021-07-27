import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {
  @ViewChild('repuserform') reportUserFormDirective;
  reportUserForm: FormGroup;
  username: string;
  reason: string;
  errMess: string;
  repUser: ReportedUser;

  formErrors = {
    'username': '',
    'reason': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required.'
    },
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
    this.reportUserForm = this.fb.group({

      username: '',
      reason: ''

    });

    this.reportUserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.repUser = this.reportUserForm.value;

    console.log(this.repUser);
    // Servise bağlanacak signup bilgileri
    // this.sendUser.submitUser(this.user);

    this.reportUserFormDirective.resetForm();
    this.reportUserForm.reset({
      reason: "",
      username: "",

    });
  }

  onValueChanged(data?: any) {
    if (!this.reportUserForm) { return; }
    const form = this.reportUserForm;
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

export class ReportedUser {

  username: string;
  reason: string;

}
