import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  empName: string = 'Anusha';
  getEmployee() {
  return `My name is: ${this.empName}`;
  }
}
