import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../sharedServices/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  empList = [];
  constructor(private employeeService: EmployeeService) {
  this.empList = employeeService.getEmployeesList()
  }

}
