import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-review',
  templateUrl: './club-review.component.html',
  styleUrls: ['./club-review.component.css']
})
export class ClubReviewComponent implements OnInit {
  @ViewChild('clubRevForm') clubReviewFormDirective;


  clubReviewForm: FormGroup;
  errMess: string;
  review: string;
  rating: number;

  revInfo: revInfo;

  formErrors = {

    'review': '',
    'rating': ''
  };

  validationMessages = {

    'review': {
      'required': 'Review is required.'
    },
    'rating': {
      'required': 'Rating is required.'
    }

  };

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }



  createForm() {
    this.clubReviewForm = this.fb.group({

      review: '',
      rating: 0

    });

    this.clubReviewForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.revInfo = this.clubReviewForm.value;

    console.log(this.revInfo);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.clubReviewFormDirective.resetForm();
    this.clubReviewForm.reset({
      review: "",
      rating: 0


    });
  }

  onValueChanged(data?: any) {
    if (!this.clubReviewForm) { return; }
    const form = this.clubReviewForm;
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
export class revInfo {
  review: string;
  rating: number;
}
