import { Component } from '@angular/core';
import { ProductService } from '../sharedServices/product.service';

@Component({
  selector: 'app-proass',
  templateUrl: './proass.component.html',
  styleUrls: ['./proass.component.css']
})
export class ProassComponent {
  product = [];
  constructor(private productService: ProductService) {
  this.product=productService.getProductList()

  }
}
  //product: any[] = [
  //  { productID: 101, productName: 'Ball', productPrice: 70, productDescription: 'For sports', productImage: '../assets/ball1.jpg' },
  //  { productID: 102, productName: 'Colgate', productPrice: 50, productDescription: 'Paste', productImage: '../assets/colgate.jpg' },
  //  { productID: 103, productName: 'Saree', productPrice: 1800, productDescription: 'Pattu Saree', productImage: '../assets/saree.jpg' },
  //  { productID: 104, productName: 'Toy', productPrice: 500, productDescription: 'To play', productImage: '../assets/toy.jpg' },
  //  { productID: 105, productName: 'Laptop', productPrice: 70000, productDescription: 'Dell', productImage: '../assets/laptop.jpg' }

  //]
