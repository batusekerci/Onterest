import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ontry-page',
  templateUrl: './ontry-page.component.html',
  styleUrls: ['./ontry-page.component.css']
})
export class OntryPageComponent implements OnInit {
  @ViewChild('cForm') commentFormDirective;


  commentForm: FormGroup;

  errMess: string;
  comment: string;

  commentInfo: {
    comment: string;
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
    this.commentForm = this.fb.group({
      comment: ''

    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.commentInfo = this.commentForm.value;

    console.log(this.commentInfo);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.commentFormDirective.resetForm();
    this.commentForm.reset({

      comment: "",

    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
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
