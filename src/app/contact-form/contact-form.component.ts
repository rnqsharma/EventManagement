import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  type = [ 'Personal', 'Organizational', 'Educational', 'Extra-Curricular', 'Tours'];
  contactForm : FormGroup;
  phonePattern = '^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}98(\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup ({
      'name': new FormControl(null , Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      //'phone': new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      'phone': new FormControl(null , Validators.required ),
      'eventType': new FormControl(null),
      'eventDetails': new FormControl(null),

      
    })

  }
  onSubmit(){
    
    console.log(this.contactForm.value);
  }
  
  
}
