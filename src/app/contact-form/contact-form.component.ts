import { Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  type = ['Personal', 'Organizational', 'Educational', 'Extra-Curricular', 'Tours'];
  contactForm: FormGroup;
  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      // 'phone': new FormControl(null , Validators.required),
      'eventType': new FormControl(null),
      'eventDetails': new FormControl(null),

    })
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });``
  }


  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
      alert('Form Submitted')
    } else {
      this.validateAllFormFields(this.contactForm);
    }

  }
}
