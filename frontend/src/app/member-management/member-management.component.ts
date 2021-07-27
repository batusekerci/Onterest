import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})
export class MemberManagementComponent implements OnInit {
  @ViewChild('manageform') manageUserFormDirective;
  
  errMess: string;
  username: string;
  action: string;
  managementForm: FormGroup;
  actionObj: Action;

  formErrors = {
    'username': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required.'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.managementForm = this.fb.group({

      username: '',
      action: ''

    });

    this.managementForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    //TODO

    this.actionObj = this.managementForm.value;

    console.log(this.actionObj);
    // Servise bağlanacak management bilgileri
    // this.sendUser.submitUser(this.user);

    this.manageUserFormDirective.resetForm();
    this.managementForm.reset({

      username: "",
      action: ""

    });
  }

  onValueChanged(data?: any) {
    if (!this.managementForm) { return; }
    const form = this.managementForm;
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

export class Action {

  username: string;
  action: string;
}

