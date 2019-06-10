import { Component, OnInit } from '@angular/core';
import { models } from './models/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:models =new models();
  loginForm:FormGroup;
  hide=true;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  error: string;
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username+" "+password);
 
   if(username == 'admin' && password == '12345') {
     window.location.href = "/employee-details";
 
   }else {
     this.error = "Username/Password is Incorrect";
   }
 
  }

}
