import { Product } from "../products";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    items: Product[] = [];

    addToCart(product:Product){
        this.items.push(product);
        console.log(this.items.length);
        return this.items;
    }

    getItems(){
        return this.items;
    }

    clearCart(){
        this.items = [];
        return this.items;
    }

}