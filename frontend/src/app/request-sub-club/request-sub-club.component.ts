import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-sub-club',
  templateUrl: './request-sub-club.component.html',
  styleUrls: ['./request-sub-club.component.css']
})
export class RequestSubClubComponent implements OnInit {

  @ViewChild('reqSubClubForm') requestSubClubFormDirective;
  requestSubClubForm: FormGroup;

  errMess: string;
  subClubName: string;
  reason: string;

  subSuggestion: SubClubSuggestion;

  formErrors = {

    'subClubName': '',
    'reason': ''
  };

  validationMessages = {

    'subClubName': {
      'required': 'Subclub Name is required.'
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
    this.requestSubClubForm = this.fb.group({


      subClubName: '',
      reason: '',

    });

    this.requestSubClubForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.subSuggestion = this.requestSubClubForm.value;

    console.log(this.subSuggestion);
    // Servise bağlanacak suggestion bilgileri
    // this.service.submitMessage(this.subSuggestion);

    this.requestSubClubFormDirective.resetForm();
    this.requestSubClubForm.reset({

      subClubName: "",
      reason: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.requestSubClubForm) { return; }
    const form = this.requestSubClubForm;
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

export class SubClubSuggestion {
  subClubName: string;
  reason: string;
}
