import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  myName: string = 'Arun123 kumar';
  price: number = 7000.12;
  myDate: any = Date()
  customer: object = { name: 'Anusha', age: 22 }
}​​​​​​​​
