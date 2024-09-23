import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  user: boolean = false;
  kartIcon = faShoppingCart;

  constructor(private _router: Router, private _cartService: CartService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getRole();
    this._cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }
  logout() {
    sessionStorage.setItem('role', '');
    this._router.navigateByUrl('/Signin-Signup');
  }
  getRole() {
    if (sessionStorage.getItem('role') == 'user') {
      this.user = true;
    }
  }
  kartAction() {}
}
