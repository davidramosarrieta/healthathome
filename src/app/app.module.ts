
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Services
import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
import { ShoppingService } from './services/shopping.service';
import { DataService } from './services/data.service';

import { GuestGuard } from './guest.guard';
import { LoginGuard } from './login.guard';

import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

//Firebase


//Rutas
import { app_routing } from './app.routes';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CartComponent } from './components/cart/cart.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    ChangePasswordComponent,
    CategoriesComponent,
    ShoppingComponent,
    CartComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjMMSydfpWtUkHHSsdn6ZyouoEqIqTqlA'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, ProductsService, ShoppingService, DataService, GuestGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
