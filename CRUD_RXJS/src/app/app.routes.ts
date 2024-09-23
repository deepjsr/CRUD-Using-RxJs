import { Routes } from '@angular/router';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';
import { UserDashboardComponent } from './user/components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { UserCartComponent } from './user/components/user-cart/user-cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Signin-Signup',
    pathMatch: 'full',
  },
  {
    path: 'Signin-Signup',
    component: SigninSignupComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'user-cart',
    component: UserCartComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    pathMatch: 'full',
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
