import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component   {
  //public searchText: string = '';
  //SortbyParam: string = '';
     pproduct:any = [
    { productID: 101, productName: 'Ball', productPrice: 6000, productDes:'Sports',productImage: '../assets/ball1.jpg' },
       { productID: 102, productName: 'Colgate', productPrice: 1500, productDes: 'Paste', productImage: '../assets/colgate.jpg' },
       { productID: 103, productName: 'Saree', productPrice: 18000, productDes: 'Pattu Saree', productImage: '../assets/saree.jpg' },
       { productID: 104, productName: 'Toy', productPrice: 4000, productDes: 'Kids', productImage: '../assets/toy.jpg' },
       { productID: 105, productName: 'Laptop', productPrice: 70000, productDes: 'Dell', productImage: '../assets/laptop.jpg' }
  ]
   

}
