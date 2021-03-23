import { Component } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './eb.component.html',
  styleUrls: ['./eb.component.css']
})
export class EBComponent {
  passDataFromViewToComp(uname: string) {
    console.log(uname)
  }
   
}
