import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/empServices/employee.service";

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  public searchText: string;
  public employees: any;
  SortbyParam: string = '';
  //employees = [];
  empErrorMsg: any = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      success => this.employees = success,
      error => this.empErrorMsg = error
    )
  }
}
