import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  public courseData: any;
  constructor() { }
  ngOnInit() {
    this.courseData = [
      { courseID: 101, courseName: 'CORE JAVA', coursePrice: 2000, courseDes: 'BASICS', productImage: '../assets/allu.jpg' },
      { courseID: 102, courseName: 'ADVANCE JAVA', coursePrice: 3000, courseDes: 'ADVANCE', productImage: '../assets/vijay.jpg' }
      //{ reviewID: 103, reviewDes: 'Good', productImage: '../assets/ntr.jpg' },
      //{ reviewID: 104, reviewDes: 'Excellent', productImage: '../assets/naveen.jpg' },
      //{ reviewID: 105, reviewDes: 'HI', productImage: '../assets/laptop.jpg' }
    ]
  }

}
