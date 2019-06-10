import { Component, OnInit } from '@angular/core';
import{User} from '../employee-details/models/user';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
user:User;

  constructor() { }

  ngOnInit() {
    this .resetForm();
  }
resetForm(form?:NgForm)
{
if (form ! = null)
form.reset();
this.user={
  UserName:'',
  Password:'',
  Email:'',
  FirstName:'',
  LastName:'',


}
}
}
