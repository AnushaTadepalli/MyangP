import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //dataServiceProp: string = 'welcome to Everyone!';
  //private behavSubj = new BehaviorSubject(this.dataServiceProp);
  //currentData = this.behavSubj.asObservable()
  //changeData(data: any) {
  //  this.behavSubj.next(data)
  //}


  pProductList: any[] = [
   { productID: 101, productName: 'Ball', productPrice: 70, productDescription: 'For sports', productImage: '../assets/ball1.jpg' },
   { productID: 102, productName: 'Colgate', productPrice: 50, productDescription: 'Paste', productImage: '../assets/colgate.jpg' },
   { productID: 103, productName: 'Saree', productPrice: 1800, productDescription: 'Pattu Saree', productImage: '../assets/saree.jpg' },
   { productID: 104, productName: 'Toy', productPrice: 500, productDescription: 'To play', productImage: '../assets/toy.jpg' },
    { productID: 105, productName: 'Laptop', productPrice: 70000, productDescription: 'Dell', productImage: '../assets/laptop.jpg' }
     ]
  private behavSubj = new BehaviorSubject(this.pProductList);
   currentData = this.behavSubj.asObservable()
   changeData(data: any[]) {
    this.behavSubj.next(data)
  }
}
