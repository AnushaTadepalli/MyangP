import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input() cAmount: any;
   
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  decrementAmount() {
    return this.cAmount--;
  }
  incrementAmount() {
    return this.cAmount++;
  }
     passAmountFromChild() {
    this.notify.emit(` Updated Amount is ${this.cAmount} `)
  }

}
