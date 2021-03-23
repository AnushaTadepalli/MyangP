import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
 pAmount:number=1000;
   updatedAmount:string;
   
  getcAmountFromChild(data:string){
 this.updatedAmount = data
 }
  
}
