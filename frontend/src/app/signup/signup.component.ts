import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('sform') signupFormDirective;
  errMess: string;

  user: User;

  email: string;
  username: string;
  password: string;
  birthDate: string;
  confirm_password: string;
  type: number;


  formErrors = {
    'username': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required.'
    }
  };

  signupForm: FormGroup;
  submitted: User;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userservice: UserService,
    private signupService: SignUpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: '',
      username: '',
      password: '',
      birthDate: '',
      type: 3
    });

    this.signupForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {

    this.user = this.signupForm.value;
    this.user.type = 3;
    this.userservice.getUser(this.user.username).subscribe(user => {
        if (user !== null) {
          alert('username is taken');
          return;
        }
        this.signupService.postUser(this.user).subscribe(response => {
          console.log(response);
          alert('signup successful');
          this.router.navigate(['/login']);
        });
      },
      errmess => this.errMess = (errmess as any));

    this.signupFormDirective.resetForm();
    this.signupForm.reset({
      email: "",
      username: "",
      password: "",
      birthDate: "",
      type: 3

    });
  }

  onValueChanged(data?: any) {
    if (!this.signupForm) { return; }
    const form = this.signupForm;
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

export class User {
  email: string;
  username: string;
  password: string;
  birthDate: string;

  type: number;
}
