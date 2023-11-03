import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/service-cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  

  constructor(private cartService:CartService,
              private formBuilder:FormBuilder){

  }

  items = this.cartService.getItems();

 grandTotal: number | undefined ;

  checkOutForm = this.formBuilder.group({
    name:'',
    address:'',
  })


  
  getTotalPrice() {
    // Calculate the total price by summing up the price of each item
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.items = this.cartService.clearCart();

    window.alert('Your order has been submitted!');
    console.warn('Your order has been submitted!', this.checkOutForm.value);

    this.checkOutForm.reset();
  }



  
  
}
