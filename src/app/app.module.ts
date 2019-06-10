import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeDetailsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'employee-details', component: EmployeeDetailsComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
