import { products } from './../products';
import { Component } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

 products = products;

 share(){
  window.alert('The product has been shared!');
 }

}
