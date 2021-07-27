import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClubMembershipService, Membership } from '../services/club-membership.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild('qForm') questFormDirective;

  questForm: FormGroup;

  errMess: string;

  answer: string;

  questAnswer: {
    answer: string;
  };

  formErrors = {
  };

  validationMessages = {

  };

  constructor(private route: ActivatedRoute,
    private clubMembershipService: ClubMembershipService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }



  createForm() {
    this.questForm = this.fb.group({

      answer: '',


    });

    this.questForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {

    this.questAnswer = this.questForm.value;

    let membership = new Membership();
    membership.author = window.sessionStorage.username;
    membership.clubName = 'book';
    membership.star = 3;

    this.clubMembershipService.joinClub(membership).subscribe(response => {
      if (response.status === 'OK') {
        console.log("successfully joined book");
        this.router.navigate(['/clubDashboard']);
        return;
      }
      console.log("could not join book")
    });

    this.questFormDirective.resetForm();
    this.questForm.reset({
      answer: "",



    });
  }

  onValueChanged(data?: any) {
    if (!this.questForm) { return; }
    const form = this.questForm;
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
