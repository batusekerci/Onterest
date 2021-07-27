import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { SignUpService } from '../services/sign-up.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  @ViewChild('delform') delFormDirective;
  errMess: string;

  deleteForm: FormGroup;
  delete: Delete;
  username: string;
  password: string;


  formErrors = {
    username: ''
  };

  validationMessages = {
    username: {
      required: 'Username is required.'
    }
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.deleteForm = this.fb.group({
      username: '',
      password: ''

    });


    this.deleteForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.delete = this.deleteForm.value;

    console.log(this.delete);

    this.userservice.getUser(this.delete.username).subscribe(user => {
        if (user === null) {
          alert('user with username does not exist');
          return;
        }
        if (user.password !== this.delete.password) {
          alert('password does not match');
          return;
        }
        this.userservice.deleteUser(user.username).subscribe(response => {
          if (response.status === 'OK') {
            alert('your account is deleted');
            return;
          }
          alert('account could not be deleted');
        });
      },
      errmess => this.errMess = (errmess as any));

    this.delFormDirective.resetForm();
    this.deleteForm.reset({
      username: '',
      password: '',

    });
  }

  onValueChanged(data?: any) {
    if (!this.deleteForm) { return; }
    const form = this.deleteForm;
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

export class Delete {

  username: string;
  password: string;

}
