import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ItemCart } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';
import { ShoppingService } from '../../services/shopping.service';
import { Location } from '@angular/common';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
	message:string;

	constructor(private productsService: ProductsService, private shoppingService: ShoppingService, private route: ActivatedRoute, private location: Location, private data: DataService) { }

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');
	
	id = localStorage.getItem('selected_category');
	name_selected_category = localStorage.getItem('name_selected_category');
	search_product_name = "";
	
	domain = 'http://13.90.130.197';
	products: any;
	item_cart: ItemCart;
	length_cart : any;
	selected_quantities = [];

	ngOnInit() {
		this.data.selected_categoryMessage.subscribe(value => this.products = value);
		this.data.category_name_messageSource.subscribe(value => this.name_selected_category = value);
		this.data.product_name_messageSource.subscribe(value => this.search_product_name = value);
		this.by_category_product(this.id, this.name_selected_category);
	}

	by_category_product(value: string, name: string): void {
		this.productsService.byCategoryProduct(value)
		.subscribe(response => {
			this.products = response;
			localStorage.setItem('selected_category', value);
			localStorage.setItem('name_selected_category', name);
		});
	}

	add_item_cart(product: Product, quantity: any): void {
		this.item_cart = {
			product: product,
			quantity: quantity
		};
		console.log('this.item_cart');
		console.log(this.item_cart);

		this.shoppingService.addItemCart(this.item_cart)
		.subscribe(response => {
			console.log('response');
			console.log(response);
		});
		this.get_length_cart();
		this.get_length_cart();
		this.get_length_cart();
	}

	get_length_cart(): void {
		this.shoppingService.getCart(null)
		.subscribe(response => {
			this.length_cart = response.items.length;
			console.log('this.length_cart:');
			console.log(this.length_cart);
			this.data.change_length_cart_message(this.length_cart);
		});
	}
	
}
