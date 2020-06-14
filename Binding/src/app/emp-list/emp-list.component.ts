import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './../employee-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees = [];
  public errorMessage = "";
  constructor(private _employeeService: EmployeeServiceService) { }
  ngOnInit(): void {
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data,
        error => this.errorMessage = error);
  }

}
