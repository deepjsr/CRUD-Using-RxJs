import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginSignUpService } from '../shared/services/login-sign-up.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css',
})
export class SigninSignupComponent {
  signIn: boolean = true;
  signInFormValue: any = {};
  user_data: any;
  constructor(
    private _router: Router,
    private _logInSignupService: LoginSignUpService
  ) {}

  OnsubmitSignIn() {
    this._logInSignupService
      .authLogin(
        this.signInFormValue.userEmail,
        this.signInFormValue.userPassword
      )
      .subscribe(
        (data) => {
          this.user_data = data;
          if (this.user_data.length == 1) {
            if (this.user_data[0].role == 'admin') {
              sessionStorage.setItem('user_session_id', this.user_data[0].id);
              sessionStorage.setItem('role', this.user_data[0].role);
              this._router.navigateByUrl('/admin-dashboard');
            } else if (this.user_data[0].role == 'user') {
              sessionStorage.setItem('user_session_id', this.user_data[0].id);
              sessionStorage.setItem('role', this.user_data[0].role);
              localStorage.setItem('user_data', JSON.stringify(this.user_data));
              this._router.navigateByUrl('/user-dashboard');
            } else {
              alert('INVELID CREDENTIAL 😒!');
            }
          }
          console.log(this.user_data);
        },
        (error) => console.error(error)
      );
  }
  register() {
    this.signIn = !this.signIn;
  }
}
