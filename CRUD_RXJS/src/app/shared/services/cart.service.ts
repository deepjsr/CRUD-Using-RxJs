import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { OrderService } from './order.service';
import { Order } from '../../core/object.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSource = new BehaviorSubject<number>(0); // Initial cart count is 0
  cartCount$ = this.cartCountSource.asObservable();

  constructor(private _orderService: OrderService) {}

  addToCart(order_body: Order) {
    let currentCount = this.cartCountSource.value;
    this.cartCountSource.next(currentCount + 1); // Increment cart count
    this._orderService.addNewProduct(order_body).subscribe(
      (data) => {
        alert('order added successfully');
      },
      (error) => {
        console.error('error posting orders', error);
      }
    );
    console.log(order_body, 'from add to cart');
  }
}
