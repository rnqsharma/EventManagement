import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  type = [ 'Personal', 'Organizational', 'Educational', 'Extra-Curricular', 'Tours'];
  name;
  phone;
  email;
  more
  confirmemail;
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(form:NgForm){
    console.log(form.value)
  }

}
