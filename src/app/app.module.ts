import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

//Services
import { UserService } from './services/user.service';
import { GuestGuard } from './guest.guard';
import { LoginGuard } from './login.guard';

import {HttpClientModule} from '@angular/common/http';

//Rutas
import { app_routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [UserService, GuestGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
