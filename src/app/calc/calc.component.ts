import { Component } from '@angular/core';
import { CalculatorService } from '../sharedServices/calculator.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  result: number;

  constructor(private calculator: CalculatorService, private c: CalculatorService) { }
  add(a: number, b: number) { this.result = this.calculator.add(a, b) }


  sub(a: number, b: number) { this.result = this.calculator.sub(a, b); }


  mul(a: number, b: number) { this.result = this.c.mul(a, b) }


  div(a: number, b: number) {
    this.result = this.c.div(a, b);
  }
  //result: number;
  //add(firstno, secondno) {
  // this.result = parseInt(firstno) + parseInt(secondno);
  //}
  //sub(firstno, secondno) {
  //  this.result = firstno - secondno;
  //}
  //mul(firstno, secondno) {
  //  this.result = firstno * secondno;
  //}
  //div(firstno, secondno) {
  //   this.result = firstno / secondno;
  //}

}
