import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('mesForm') messageFormDirective;

  messageForm: FormGroup;

  receiver: string;
  message: string;

  messageInfo: mesInfo;

  formErrors = {

    'receiver': ''
  };

  validationMessages = {

    'message': {
      'required': 'Receiver is required.'
    }

  };


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.messageForm = this.fb.group({


      receiver: '',
      message: '',

    });

    this.messageForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onSubmit() {
    //TODO

    this.messageInfo = this.messageForm.value;

    console.log(this.messageInfo);
    // Servise bağlanacak message bilgileri
    // this.service.submitMessage(this.message);

    this.messageFormDirective.resetForm();
    this.messageForm.reset({
      receiver: "",
      message: "",


    });
  }

  onValueChanged(data?: any) {
    if (!this.messageForm) { return; }
    const form = this.messageForm;
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

export class mesInfo {
  receiver: string;
  message: string;
}
