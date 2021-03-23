import { Component } from '@angular/core';

@Component({
  selector: 'app-apro',
  templateUrl: './apro.component.html',
  styleUrls: ['./apro.component.css']
})
export class AproComponent   {
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';
  products: any[] = [
      { productID: 101, productName: 'Ball', productPrice: 60, productDate: new Date("Sep 23, 2023"), prodDesc: 'Small, playable', productImage: '../assets/ball1.jpg' },
      { productID: 102, productName: 'Colgate', productPrice: 50, productDate: new Date("Feb 15, 2027"), prodDesc: 'Paste', productImage: '../assets/colgate.jpg' },
      { productID: 103, productName: 'Saree', productPrice: 1800, productDate: new Date("Aug 27, 2022"), prodDesc: 'Discount Pattu Saree', productImage: '../assets/saree.jpg' },
      { productID: 104, productName: 'Toy', productPrice: 400, productDate: new Date("Jun 12, 2024"), prodDesc: 'Play' , productImage: '../assets/toy.jpg' },
      { productID: 105, productName: 'Laptop', productPrice: 70000, productDate: new Date("May 19, 2023"), prodDesc: 'Hand-helddevice ', productImage: '../assets/laptop.jpg' }
    ]
    onSortDirection() {
      if (this.SortDirection === 'desc') {
        this.SortDirection = 'asc';
      } else {
        this.SortDirection = 'desc';
      }
    }
  }
