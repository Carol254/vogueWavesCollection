import { Component } from '@angular/core';
import { CartService } from '../services/service-cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



  constructor(private cartService:CartService,
              private formBuilder:FormBuilder){

  }

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({
    name:'',
    address:'',
  })

  onSubmit(){
    this.items = this.cartService.clearCart();

    window.alert('Your order has been submitted!');
    console.warn('Your order has been submitted!', this.checkOutForm.value);

    this.checkOutForm.reset();
  }
}
