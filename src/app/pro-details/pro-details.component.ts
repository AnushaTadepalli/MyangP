import { Component, OnInit } from '@angular/core';
import { proServices } from "src/app/proServices/product.service";

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {
  public searchText: string = '';
  products = [];
  empErrorMsg: any = '';
  SortbyParam: string = '';

  constructor(private proServices: proServices) { }

  ngOnInit(): void {
    this.proServices.getProducts().subscribe(
      success => this.products = success,
      error => this.empErrorMsg = error
    )
  } 

}
