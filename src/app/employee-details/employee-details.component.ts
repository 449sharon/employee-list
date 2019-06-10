import { Component, OnInit } from '@angular/core';
import{ Employee} from  './models/employee';
import { EMPLOYEES} from './mock-employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  title = ' CodeTribe Employee-List';
  gender=['Female','Male']
  employee = [];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employee.push(this.model);
    this.model={};
    this.msg ="Record is successfully added......."
    
  }
  deleteEmployee(i){
    this.employee.splice(i,1);
    this.msg ="Record is successfully deleted......."
    
    console.log(i);
  }
  myValue;
  editEmployee(k){
    this.model2.name =this.employee[k].name;
    this.model2.lastName =this.employee[k].lastName;
    this.model2.gender =this.employee[k].gender;
    this.model2.contact =this.employee[k].contact;
    this.model2.organizationUnit =this.employee[k].organizationUnit;
    this.model2.bio =this.employee[k].bio;
    this.myValue =k;
  }
  updateEmployee(){ 
    let k = this.myValue;
    for (let i =0; i<this.employee.length;i++)
    if(i==k){
      this.employee[i] =this.model2;
      this.model2 ={};
      this.msg ="Record is successfully updated......."
     
    } 

  } 
  clickMe(){
    this.msg="";
  
    }
  

  constructor() { }

  ngOnInit() {
  }

}

