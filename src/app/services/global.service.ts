import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  products: any = [];
  cart: any = [];
  cartCount = new BehaviorSubject<any>(0);
  cartPrice = new BehaviorSubject<any>(0);

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get('http://localhost:4500/products').subscribe((data: any) => {
      this.products = data;
      console.log(data);

    });
    return this.http.get('http://localhost:4500/products');
  }

  getProductId(id: number) {
    return this.http.get('http://localhost:4500/products/' + id);
  }

  addProduct(obj: any): Observable<any> {
    return this.http.post('http://localhost:4500/products', obj);
  }

  editProduct(obj: any) {
    return this.http.put('http://localhost:4500/products/' + obj.id, obj);
  }

  getProductById(id: number) {
    return this.products.find((product: any) => {
      return product.id === id;
    });
  }

  getCartItems() {
    return this.cart;
  }

  addToCart(item: any, quantity: number) {
    if (quantity == 0) {
      return;
    } else {
      if (this.cart.find((cartItem: any) => cartItem.id == item.id)) {
        this.cart.forEach((element: any) => {
          if (element.id == item.id) {
            element.quantity = element.quantity + quantity;
          }
        });
      } else {
        this.cart.push({ ...item, quantity: quantity });
      }
      this.makeCount()
    }
  }

  removeItemFromCart(id: any) {
    this.cart.splice(this.cart.findIndex((cartItem: any) => { return cartItem.id == id }), 1)
    this.makeCount();
  }

  makeCount() {
    let totalItems = 0;
    let totalAmount = 0;
    this.cart.map((cartItem: any) => {
      totalItems = cartItem.quantity + totalItems;
      totalAmount = cartItem.quantity * cartItem.price + totalAmount;
    });
    this.cartCount.next(totalItems);
    this.cartPrice.next(totalAmount);
  }

  private productId = new BehaviorSubject<any>(null);
  FormValue = this.productId.asObservable();

  updateProduct(data: any) {
    this.productId.next(data);
  }

}
