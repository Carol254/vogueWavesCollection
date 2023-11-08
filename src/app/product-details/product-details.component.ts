import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/service-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  count: number = 1;
  totalPrice!: number;

  constructor(private route:ActivatedRoute,
              private cartService:CartService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product =>product.id === productIdFromRoute); 
    
    this.totalPrice = this.product.price;
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onAddItems(){
    this.count ++;
    this.totalPrice = this.product.price * this.count;
  }

  onRemoveItems(){
    if(this.count > 1){
      this.count --;
    }
    this.totalPrice = this.product.price * this.count;
  }

}
