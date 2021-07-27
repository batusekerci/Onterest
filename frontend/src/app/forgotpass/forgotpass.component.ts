import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  @ViewChild('fform') forgotFormDirective;
  errMess: string;

  formErrors = {
    'email': ''
  };

  validationMessages = {
    'email': {
      'required':      'Email is required.'
    }
  };

  forgotForm: FormGroup;
  forgot: Forgot;

  constructor(
    private route: ActivatedRoute,
    private userservice: UserService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotForm = this.fb.group({
      email: '',
      username: '',

    });

    this.forgotForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.forgot = this.forgotForm.value;
    console.log(this.forgot);
    this.userservice.getUser(this.forgot.username).subscribe(user => {
        if (user === null) {
          alert('user with username does not exist');
          return;
        }
        if (user.email !== this.forgot.email) {
          alert('email does not match');
          return;
        }
        alert('your password is: ' + user.password);
      },
      errmess => this.errMess = (errmess as any));

    this.forgotFormDirective.resetForm();
    this.forgotForm.reset({
      email: "",
      username: "",

    });
  }



  onValueChanged(data?: any) {
    if (!this.forgotForm) { return; }
    const form = this.forgotForm;
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

export class Forgot{
  email: string;
  username: string;

}
