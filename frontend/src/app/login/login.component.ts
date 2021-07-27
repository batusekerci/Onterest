import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { SignUpService } from '../services/sign-up.service';
import { User } from '../signup/signup.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('lform') loginFormDirective;
  username: string;
  errMess: string;
  password: string;
  login: LoginInfo;
  submitted = null;
  users: User[];

  formErrors = {
    'password': ''
  };

  validationMessages = {
    'password': {
      'required': 'Password is required.'
    }
  };

  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userservice: UserService,
    @Inject('baseURL') private baseURL
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({

      username: ['', [Validators.required]],
      password: ['', [Validators.required]],


    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    this.login = this.loginForm.value;

    // console.log(this.login);

    //json parse örneği
    // var obj = JSON.parse(this.dishservice.getDishIds());



    // this.loginservice.postUser(this.login)
    //   .subscribe(login => {
    //     this.submitted = login;
    //     this.login = null;
    //     setTimeout(() => { this.submitted = null; }, 5000);
    //   },
    //     error => console.log(error.status, error.message));

    this.userservice.getUser(this.login.username).subscribe(user => {
      if (user == null) {
        alert('username or password dont match');
        return;
      }
      if (user.password !== this.login.password) {
        alert('wrong password');
        return;
      }
      alert('login successful');
      window.sessionStorage.username = user.username;
      window.sessionStorage.type = user.type;
      // window.location.replace('http://localhost:4200/questionnaire');
      this.router.navigate(['/questionnaire']);
    },
      errmess => this.errMess = (errmess as any));
    this.loginForm.reset({
      username: '',
      password: ''
    });
    this.loginFormDirective.resetForm();
  }
  // tslint:disable-next-line:typedef
  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
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

export class LoginInfo {
  username: string;
  password: string;
}





