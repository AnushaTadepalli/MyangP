//import { Component} from '@angular/core';

//@Component({
//  selector: 'app-parent',
//  templateUrl: './parent.component.html',
//  styleUrls: ['./parent.component.css']
//})
//export class ParentComponent {
//   pproduct: any = {
//    ProductId: 101,
//    ProductName: 'Anusha'
//    }
//     parentData: string;
//     getDataFromChild(data: string) {
//      this.parentData = data
//    }
//    //   { productID: 101, productName: 'Ball', productPrice: 70, productDescription: 'For sports' },
//    //   { productID: 102, productName: 'Colgate', productPrice: 50, productDescription: 'Paste' },
//    //   { productID: 103, productName: 'Saree', productPrice: 1800, productDescription: 'Pattu Saree'},
//    //   { productID: 104, productName: 'Toy', productPrice: 500, productDescription: 'To play'},
//    //   { productID: 105, productName: 'Laptop', productPrice: 70000, productDescription: 'Dell' }
//    //}
//  }


import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  pcustomer = {
    name: 'Anusha',
    age: 23
  }
  parentData: string;
  getDataFromChild(data: string) {
    this.parentData = data
  }
}
