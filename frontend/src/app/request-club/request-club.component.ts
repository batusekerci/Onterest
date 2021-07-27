import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-club',
  templateUrl: './request-club.component.html',
  styleUrls: ['./request-club.component.css']
})
export class RequestClubComponent implements OnInit {
  @ViewChild('reqClubForm') requestClubFormDirective;
  requestClubForm: FormGroup;

  errMess: string;
  clubName: string;
  reason: string;

  suggestion: Suggestion;

  formErrors = {

    'clubName': '',
    'reason': ''
  };

  validationMessages = {

    'clubName': {
      'required': 'Club Name is required.'
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
    this.requestClubForm = this.fb.group({


      clubName: '',
      reason: '',

    });

    this.requestClubForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.suggestion = this.requestClubForm.value;

    console.log(this.suggestion);
    // Servise bağlanacak suggestion bilgileri
    // this.service.submitMessage(this.suggestion);

    this.requestClubFormDirective.resetForm();
    this.requestClubForm.reset({

      clubName: "",
      reason: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.requestClubForm) { return; }
    const form = this.requestClubForm;
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

export class Suggestion {
  clubName: string;
  reason: string;
}