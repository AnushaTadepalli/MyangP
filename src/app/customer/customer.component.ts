import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {

  custname: string = "Akhil";
  custage: number = 30;
  custdesig: string = "Doctor";
  custsal: number = 5000;
  custloc: string = "Delhi";

}
