
 
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dass',
  templateUrl: './dass.component.html',
  styleUrls: ['./dass.component.css']
})
export class DassComponent implements OnInit {
  public searchText: string;
  public productData: any;

  constructor() { }
  ngOnInit() {
    this.productData = [
      { productID: 101, productName: 'Ball', productPrice: 60, productDate: Date(), productImage: '../assets/ball1.jpg' },
      { productID: 102, productName: 'Colgate', productPrice: 50, productDate: Date(), productImage: '../assets/colgate.jpg' },
      { productID: 103, productName: 'Saree', productPrice: 1800, productDate: Date(), productImage: '../assets/saree.jpg' },
      { productID: 104, productName: 'Toy', productPrice: 400, productDate: Date(),    productImage: '../assets/toy.jpg' },
      { productID: 105, productName: 'Laptop', productPrice: 70000, productDate: Date(), productImage: '../assets/laptop.jpg' }
    ]
  }
}
