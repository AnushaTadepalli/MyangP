import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrls: ['./struct-dir.component.css']
})
export class StructDirComponent {

  customers: any[] = [
    { custId: 101, custName: 'Anusha' },
    { custId: 102, custName: 'Atisha' }
  ]

  //showProduct1: boolean = true;
  //showProduct2: boolean = true;

}
