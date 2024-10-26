import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  quantity : number = 0;

  constructor(private global:GlobalService) { }

  ngOnInit(): void {
  }

  addToCart(){
    event?.stopPropagation();
    this.newItemEvent.emit(this.quantity)
    this.quantity = 0;
  }

  increaseQuantity(){
    event?.stopPropagation()
    this.quantity++;
  }

  decreaseQuantity(){
    event?.stopPropagation()
    if(this.quantity == 0){
      return ;
    }else{
      this.quantity--;
    }
  }

}
