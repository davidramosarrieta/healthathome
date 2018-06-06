import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ItemCart } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';
import { ShoppingService } from '../../services/shopping.service';
import { Location } from '@angular/common';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  	constructor(private shoppingService: ShoppingService, private route: ActivatedRoute, private location: Location, private data: DataService) { }

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');

	last_pay_code = localStorage.getItem('last_pay_code');

	domain = 'http://13.90.130.197';
	cart: any;
	items: any;
	length_cart : any;
	pay_cart_values: any;

	ngOnInit() {
		this.get_cart();
		console.log(this.items);
	}

	get_cart(): void {
		this.shoppingService.getCart(null)
		.subscribe(response => {
			this.cart = response;
			this.length_cart = response.items.length;
			this.items = response.items;
			console.log('this.cart:');
			console.log(this.cart);

			console.log('this.user:');
			console.log(this.cart.user);

			console.log('this.items:');
			console.log(this.items);
		});
	}

	pay_cart(value: any): void {
		console.log(value);
		this.pay_cart_values = {
			"buyer": {
				"contactPhone": "string",
				"dniNumber": "string",
				"emailAddress": this.email_user_login,
				"fullName": "string",
				"merchantBuyerId": "string",
				"shippingAddress": {
					"city": "string",
					"country": "string",
					"phone": "string",
					"postalCode": "string",
					"state": "string",
					"street1": "string",
					"street2": "string"
				}
			},
			"creditCard": {
				"expirationDate": "string",
				"name": "string",
				"number": value.number,
				"securityCode": value.securityCode
			},
			"paymentMethod": "string",
			"shippingAddress": {
				"city": "string",
				"country": "string",
				"phone": "string",
				"postalCode": "string",
				"state": "string",
				"street1": "string",
				"street2": "string"
			},
			"test": true,
			"user": this.email_user_login
		};
		console.log(this.pay_cart_values);
		this.shoppingService.payCart(this.pay_cart_values)
		.subscribe(response => {
			console.log(response);
			if(response.hasError == false) {
				localStorage.setItem('last_pay_code', response.message);
				location.reload();
			}
		});
	}

}
