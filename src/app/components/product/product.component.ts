import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(private global:GlobalService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id'])
  }

  getProduct(id: number){
     this.global.getProductId(id).subscribe((res: any) =>{
      this.product = res
    })

  }

  addToCart(eve: number,product: any){
    this.global.addToCart(product,eve)
  }

}
