import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.css']
})
export class UserProfileSettingsComponent implements OnInit {
  @ViewChild('userProfForm') userProfileFormDirective;

  userProfileForm: FormGroup;

  errMess: string;
  showAgeChecked: boolean;
  bio: string;
  name: string;

  userInfo: Info;

  formErrors = {

    'message': ''
  };

  validationMessages = {

    'message': {
      'required': 'Message is required.'
    }

  };


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.createForm();
  }

  createForm() {
    this.userProfileForm = this.fb.group({

      showAgeChecked: null,
      bio: '',
      name: '',

    });

    this.userProfileForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.userInfo = this.userProfileForm.value;

    console.log(this.userInfo);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.userProfileFormDirective.resetForm();
    this.userProfileForm.reset({
      showAgeChecked: null,
      bio: "",
      name: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.userProfileForm) { return; }
    const form = this.userProfileForm;
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

export class Info {
  showAgeChecked: boolean;
  bio: string;
  name: string;

}