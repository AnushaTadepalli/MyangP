import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  public webData: any;
 
  constructor() { }
  ngOnInit() {
    this.webData = [
      { courseID: 101, courseName: 'JAVASCRIPT', coursePrice: 2000, courseDes: 'BASICS', productImage: '../assets/allu.jpg' },
      { courseID: 102, courseName: 'ANGULAR', coursePrice: 3000, courseDes: 'ADVANCE', productImage: '../assets/vijay.jpg' }
     ]
   }
}
