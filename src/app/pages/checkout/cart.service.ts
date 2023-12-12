import { Injectable } from '@angular/core';
import { CartInfo } from './CartInfo.model';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Declare the property for the cart items
  cartItems: CartInfo[] = [];

  constructor() {}

  // Add an item to the cart
  addToCart(item: CartInfo) {
    this.cartItems.push(item);
  }

  // Remove an item from the cart
  removeFromCart(item: CartInfo) {
    let index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // Get the items from the cart
  getCartItems() {
    return this.cartItems;
  }

  // Get the total price of the items in the cart
  getCartTotal() {
   
  }
}