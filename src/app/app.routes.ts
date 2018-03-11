import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products', pathMatch:'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);