import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  logindata!: string | null;

  constructor(private global: GlobalService, private router: Router) { }

  products: any = [];

  ngOnInit(): void {
    this.getProducts()
    this.logindata = localStorage.getItem('username')
  }

  getProducts() {
    this.global.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      }
    );
  }

  addToCart(eve: number, product: any) {
    event?.stopPropagation()
    this.global.addToCart(product, eve)
  }
  editData(id: any) {
    this.global.updateProduct(id);
    this.router.navigateByUrl('/add-product')
  }
  navigateTo(id: any) {
    this.router.navigate(['/product', id])
  }

}
