import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public searchText: string;
  public reviewData: any;
  SortbyParam: string = '';
  constructor() { }
  ngOnInit() {
    this.reviewData = [
      { reviewID: 101, reviewDes: 'Need Improvement', productImage: '../assets/allu.jpg' },
      { reviewID: 102, reviewDes: 'Ok', productImage: '../assets/vijay.jpg' },
      { reviewID: 103, reviewDes: 'Good', productImage: '../assets/ntr.jpg' },
      { reviewID: 104, reviewDes: 'Excellent', productImage: '../assets/naveen.jpg' },
      //{ reviewID: 105, reviewDes: 'HI', productImage: '../assets/laptop.jpg' }
    ]
  }

}
