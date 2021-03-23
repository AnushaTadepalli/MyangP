import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeesList() {
    return [
      { empId: 101, empName: 'jyothi' },
      { empId: 102, empName: 'pooja' },
      { empId: 103, empName: 'payal' }
    ]
  }
 }
