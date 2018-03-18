import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

	constructor(private productsService: ProductsService, private route: ActivatedRoute, private location: Location) { }

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');
	
	id = localStorage.getItem('selected_category');
	name_selected_category = localStorage.getItem('name_selected_category');
	
	domain = 'http://13.90.130.197';
	products: any;

	ngOnInit() {
		this.by_category_product(this.id, this.name_selected_category);
	}

	by_category_product(value: string, name: string): void {
		this.productsService.byCategoryProduct(value)
		.subscribe(response => {
			this.products = response;
			console.log(this.products);
			localStorage.setItem('selected_category', value);
			localStorage.setItem('name_selected_category', name);
		});
	}
}
