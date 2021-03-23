import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Iproduct } from "src/app/model/iproduct";

@Injectable({
  providedIn: 'root'
})
export class proServices {

  private url: string = "../assets/product.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(this.url)
  }
}

