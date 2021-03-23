//import { Component, EventEmitter, Input, Output} from '@angular/core';

//@Component({
//  selector: 'app-child',
//  templateUrl: './child.component.html',
//  styleUrls: ['./child.component.css']
//})
//export class ChildComponent  {
//  @Input() ccustomer: any;
//  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
//  passDataFromChild() {
//    this.notify.emit('This is chiru from child component')
//  }

//}
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() ccustomer: any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  passDataFromChild() {
    this.notify.emit('Anusha from child component')
  }
}
