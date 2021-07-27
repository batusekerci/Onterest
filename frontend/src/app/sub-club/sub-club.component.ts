import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-club',
  templateUrl: './sub-club.component.html',
  styleUrls: ['./sub-club.component.css']
})
export class SubClubComponent implements OnInit {
  @ViewChild('searchMemForm') searchMemberFormDirective;


  searchMemberForm: FormGroup;

  errMess: string;

  username: string;

  user: {
    username: string
  }

  formErrors = {


  };

  validationMessages = {

  };


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.searchMemberForm = this.fb.group({
      username: ''

    });

    this.searchMemberForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.user = this.searchMemberForm.value;

    console.log(this.user);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.searchMemberFormDirective.resetForm();
    this.searchMemberForm.reset({

      username: "",

    });
  }

  onValueChanged(data?: any) {
    if (!this.searchMemberForm) { return; }
    const form = this.searchMemberForm;
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
