
import {Component,OnInit} from '@angular/core';
import{ RegisterModel } from './model/register.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import{FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({ 
    selector:'app-register',
template: './register.component.html',
styleUrls:['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    user: RegisterModel =new RegisterModel();
    registerForm: FormGroup;
    hide =true;
    constructor(private formBuilder: FormBuilder){ }
    ngOnInit()
    {
         this.registerForm = this.formBuilder.group({
           'name':[this.user.name,[Validators.required]],
           'lastName':[this.user.lastName,[Validators.required]], 
           'email':[this.user.email,[Validators.required]],
           'password':[this.user.password,[Validators.required,Validators.minLength(5),
        Validators.maxLength(15)]],
        }); 
    }
    onRegisterSubmit(){
        alert(this .user.name+" " +this.user.lastName+ ' '+ this.user.email +' '+this.user.password)
    }
}
