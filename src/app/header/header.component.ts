import { Product } from './../products';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/service-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 
export class HeaderComponent implements OnInit{

  constructor(private cartService:CartService){

  }

  items = this.cartService.getItems();

  ngOnInit(): void {
  }
}
