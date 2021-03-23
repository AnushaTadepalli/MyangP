import { Component} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  myImage: string = "../assets/flower.jpg";
  name: string = 'Anusha'

}
