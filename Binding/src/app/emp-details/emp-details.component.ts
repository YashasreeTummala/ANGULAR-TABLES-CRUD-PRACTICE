import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './../employee-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  public employees = [];
  public errorMessage = "";

  constructor(private _employeeService: EmployeeServiceService) { }
  
  ngOnInit(): void {
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data,
        error => this.errorMessage = error);
  }

}
