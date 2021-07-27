import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  @ViewChild('cEventForm') createEventFormDirective;

  createEventForm: FormGroup;

  errMess: string;

  eventName: string;
  explanation: string;
  eventDate: Date;
  time: string;
  link: string;

  event: EventInfo;

  formErrors = {

    'eventName': '',
    'eventDate': ''
  };

  validationMessages = {

    'eventName': {
      'required': 'Event name is required.'
    },
    'eventDate': {
      'required': 'Date is required.'
    }


  };

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }



  createForm() {
    this.createEventForm = this.fb.group({

      eventName: '',
      explanation: '',
      eventDate: '',
      time: '',
      link: ''

    });

    this.createEventForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.event = this.createEventForm.value;

    console.log(this.event);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.createEventFormDirective.resetForm();
    this.createEventForm.reset({

      eventName: "",
      explanation: "",
      eventDate: "",
      time: "",
      link: ""


    });
  }

  onValueChanged(data?: any) {
    if (!this.createEventForm) { return; }
    const form = this.createEventForm;
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

export class EventInfo {
  eventName: string;
  explanation: string;
  eventDate: Date;
  time: string;
  link: string;

}