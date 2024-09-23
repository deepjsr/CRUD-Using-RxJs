import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';
import { Order, Product, User } from '../../../core/object.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent implements OnInit {
  @Input() product: any;
  all_product_data: any;
  order_details!: Order;
  user_details!: any;
  user_details_for_order: any;
  constructor(
    private _productService: ProductsService,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
  }
  getAllProducts() {
    this._productService.getAllProduct().subscribe((data) => {
      this.all_product_data = data;
      console.log(this.product);
    });
  }
  onAddToCart(order_body: any) {
    this.user_details = localStorage.getItem('user_data');
    this.user_details_for_order = JSON.parse(this.user_details);
    console.log(order_body, 'user data');

    this.order_details = {
      id: 0,
      userId: this.user_details.id,
      sellerId: order_body.id,
      product: {
        id: order_body.id,
        name: order_body.name,
        uploadPhoto: order_body.uploadPhoto,
        uploadDesc: order_body.productDesc,
        mrp: order_body.mrp,
        dp: order_body.dp,
      },
      deliveryAddress: this.user_details_for_order.mobile,
      contact: this.user_details_for_order.mobile,
      dateTime: new Date().toLocaleDateString().toString(),
    };
    console.log(this.order_details);

    this._cartService.addToCart(this.order_details); // Add item to cart
  }
}
