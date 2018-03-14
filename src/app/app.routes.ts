import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './guest.guard';
import { LoginGuard } from './login.guard';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from "./components/register/register.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";


const app_routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);