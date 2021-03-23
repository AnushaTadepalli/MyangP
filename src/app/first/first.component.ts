import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../impServices/data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  //myData: any;


  //constructor(private dataService: DataService) { }


  //ngOnInit(): void {
  //  this.dataService.currentData.subscribe(data => this.myData = data)
  //}
  myData: any[];


  constructor(private dataServiceService: DataServiceService) { }


  ngOnInit(): void {
    this.dataServiceService.currentData.subscribe(data => this.myData = data)
 }
  }

