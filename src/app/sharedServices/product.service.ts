import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
getProductList() {
    return [
      { productId: 101, productName: 'Ball', productPrice: 60, productDescription: 'For sports', productImage: '../assets/ball1.jpg'},
      { productID: 102, productName: 'Colgate', productPrice: 50, productDescription: 'Paste', productImage: '../assets/colgate.jpg' },
      { productID: 103, productName: 'Saree', productPrice: 1800, productDescription: 'Pattu Saree', productImage: '../assets/saree.jpg'},
      { productID: 104, productName: 'Toy', productPrice: 300, productDescription: 'To play', productImage: '../assets/toy.jpg' },
      { productID: 105, productName: 'Laptop', productPrice: 70000, productDescription: 'Dell', productImage: '../assets/laptop.jpg'}
    ]
  }
}
