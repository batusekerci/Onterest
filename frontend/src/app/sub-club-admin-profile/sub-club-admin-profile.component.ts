import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-club-admin-profile',
  templateUrl: './sub-club-admin-profile.component.html',
  styleUrls: ['./sub-club-admin-profile.component.css']
})
export class SubClubAdminProfileComponent implements OnInit {
  @ViewChild('scAdminProfForm') subClubAdminProfileFormDirective;

  subClubAdminProfileForm: FormGroup;
  errMess: string;

  showAgeChecked: boolean;
  bio: string;
  scname: string;

  scAdminInfo: ScInfo;

  formErrors = {

    'message': ''
  };

  validationMessages = {

    'message': {
      'required': 'Message is required.'
    }

  };



  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.subClubAdminProfileForm = this.fb.group({

      showAgeChecked: null,
      bio: '',
      scname: '',

    });

    this.subClubAdminProfileForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.scAdminInfo = this.subClubAdminProfileForm.value;

    console.log(this.scAdminInfo);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.subClubAdminProfileFormDirective.resetForm();
    this.subClubAdminProfileForm.reset({

      showAgeChecked: null,
      bio: "",
      scname: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.subClubAdminProfileForm) { return; }
    const form = this.subClubAdminProfileForm;
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

export class ScInfo {
  showAgeChecked: boolean;
  bio: string;
  name: string;

}