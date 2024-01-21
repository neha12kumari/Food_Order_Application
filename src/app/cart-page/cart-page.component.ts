import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private CartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
    
  }
  setCart() {
    this.cart = this.CartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.CartService.removeFromCart(cartItem.food.id);
    this.setCart();  //instance Load Data
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.CartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}