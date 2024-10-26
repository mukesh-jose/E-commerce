import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems : any = [];
  cartCount : any;
  cartPrice : any;

  constructor(public global:GlobalService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.cartItems  = this.global.getCartItems();
    this.cartCount = this.global.cartCount.getValue();
  }

  removeItemFromCart(id: number){
    this.global.removeItemFromCart(id)
    this.getCartItems();
  }

}
