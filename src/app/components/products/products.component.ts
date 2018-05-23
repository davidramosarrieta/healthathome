import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ItemCart } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';
import { ShoppingService } from '../../services/shopping.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

	constructor(private productsService: ProductsService, private shoppingService: ShoppingService, private route: ActivatedRoute, private location: Location) { }

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');
	
	id = localStorage.getItem('selected_category');
	name_selected_category = localStorage.getItem('name_selected_category');
	
	domain = 'http://13.90.130.197';
	products: any;
	item_cart: ItemCart;

	ngOnInit() {
		this.by_category_product(this.id, this.name_selected_category);
	}

	by_category_product(value: string, name: string): void {
		this.productsService.byCategoryProduct(value)
		.subscribe(response => {
			console.log(response);
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
		console.log(this.item_cart);

		this.shoppingService.addItemCart(this.item_cart)
		.subscribe(response => {
			console.log(response);
			

			localStorage.setItem('add-cart-message', 'Agregado al carrito');
			
			
		});

	}
	
}
