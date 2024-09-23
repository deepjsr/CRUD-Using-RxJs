import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

// admin before login check
@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardLogin implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    let role = sessionStorage.getItem('role');
    if (role == 'admin') {
      this._router.navigateByUrl('/admin-dashboard');
      return false;
    } else {
      return true;
    }
  }
}

// after login check
@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    let role = sessionStorage.getItem('role');
    if (role == 'admin') {
      return true;
    } else {
      this._router.navigate(['/admin-login']);
      return false;
    }
  }
}
// after (user) login check
@Injectable({
  providedIn: 'root',
})
export class UserAuthGuardLogin implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    let role = sessionStorage.getItem('role');

    if (role == 'user') {
      this._router.navigateByUrl('/user-dashboard');
      return false;
    } else {
      return true;
    }
  }
}

// after user login check
@Injectable({
  providedIn: 'root',
})
export class BuyerAuthGuardService {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    let role = sessionStorage.getItem('role');

    if (role == 'user') {
      return true;
    } else {
      this._router.navigate(['/sign-in']);
      return false;
    }
  }
}
