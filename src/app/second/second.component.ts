import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../impServices/data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  //myData: any;


  //constructor(private dataService: DataService) { }


  //ngOnInit(): void {
  //  this.dataService.currentData.subscribe(data => this.myData = data)
  //}


  //updatedData() {
  //  this.dataService.changeData("Bye to Everyone!")
  //}
  myData: any[];
  myData1: any[] = [
     
    { productID: 106, productName: 'Mobile', productPrice: 12000, productDescription: 'Oppo', productImage: '../assets/laptop.jpg' }
  ]
   constructor(private dataService: DataServiceService) { }
     ngOnInit(): void {
    this.dataService.currentData.subscribe(data => this.myData = data)
  }

  updatedData() {
    this.myData = this.myData.concat(this.myData1)  
      this.dataService.changeData(this.myData)
     //this.myData = this.myData.concat(this.a_products) this.dataService.changeData(this.myData) }
    }

  removeItem(id) {
    this.myData = this.myData.filter(myData => myData.productID !== id);
  }

}
