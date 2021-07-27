import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Ontry, OntryService} from '../services/ontry.service';

@Component({
  selector: 'app-post-ontry',
  templateUrl: './post-ontry.component.html',
  styleUrls: ['./post-ontry.component.css']
})
export class PostOntryComponent implements OnInit {
  @ViewChild('pOntryForm') postOntryFormDirective;
  postOntryForm: FormGroup;
  errMess: string;
  title: string;
  ontry: string;


  info: Ontry;

  formErrors = {

    'title': '',
    'ontry': ''
  };

  validationMessages = {

    'title': {
      'required': 'Title is required.'
    },
    'ontry': {
      'required': 'Ontry is required.'
    }

  };


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private ontryService: OntryService) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.postOntryForm = this.fb.group({


      title: '',
      body: '',
      date : '',
      member: '',
      club: null,
      subclub: ''
    });

    this.postOntryForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {


    this.info = this.postOntryForm.value;
    console.log(this.info);
    this.info.date = '2021-05-27 18:43';
    this.info.member = window.sessionStorage.username;
    this.info.club = null;
    this.info.subclub = "Adventure";
    console.log(this.info);

    this.ontryService.postOntry(this.info).subscribe(response => {
      if(response.status === 'OK') {
        alert('Ontry has been posted!');
        this.router.navigate(['/subClub']);
        return;
      }
      alert('Error, could not post :(((');
    });

    this.postOntryFormDirective.resetForm();
    this.postOntryForm.reset({

      title: "",
      body: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.postOntryForm) { return; }
    const form = this.postOntryForm;
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

