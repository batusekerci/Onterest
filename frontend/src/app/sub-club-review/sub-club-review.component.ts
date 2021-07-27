import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-club-review',
  templateUrl: './sub-club-review.component.html',
  styleUrls: ['./sub-club-review.component.css']
})
export class SubClubReviewComponent implements OnInit {
  @ViewChild('subClubRevForm') subClubReviewFormDirective;

  subClubReviewForm: FormGroup;

  errMess: string;

  subReview: string;
  subRating: number;

  subRevInfo: SubRevInfo;

  formErrors = {

    'subReview': '',
    'subRating': ''
  };

  validationMessages = {

    'subReview': {
      'required': 'Review is required.'
    },
    'subRating': {
      'required': 'Rating is required.'
    }

  };


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

  }


  createForm() {
    this.subClubReviewForm = this.fb.group({

      subReview: '',
      subRating: 0

    });

    this.subClubReviewForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.subRevInfo = this.subClubReviewForm.value;

    console.log(this.subRevInfo);
    // Servise bağlanacak subRevInfo bilgileri
    // this.service.submitMessage(this.subRevInfo);

    this.subClubReviewFormDirective.resetForm();
    this.subClubReviewForm.reset({
      subReview: "",
      subRating: 0


    });
  }

  onValueChanged(data?: any) {
    if (!this.subClubReviewForm) { return; }
    const form = this.subClubReviewForm;
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

export class SubRevInfo {
  subReview: string;
  subRating: number;
}
