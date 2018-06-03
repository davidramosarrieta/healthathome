import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	constructor(private productsService: ProductsService, private router: Router, private data: DataService) { }
	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');
	selected_category = localStorage.getItem('selected_category');
	name_selected_category = localStorage.getItem('name_selected_category');

	products: Product[];

	ngOnInit() {
		if(this.selected_category == null) {
			this.selected_category = '1';
		}
		this.by_category_product_function(this.selected_category, this.name_selected_category);
	}

	by_category_product(value: string, name: string): void {
		this.by_category_product_function(value, name);
	}

	by_category_product_function(value: string, name: string) {
		localStorage.setItem('selected_category', value);
		localStorage.setItem('name_selected_category', name);
		this.get_products(value, name);
	}

	search(value){
		console.log(value);
		if (!value['name']) { return; }
		console.log(value['name']);
		this.get_name_products(value['name']);
	}

	get_products(value: string, name: string): void {
		this.productsService.byCategoryProduct(value)
		.subscribe(response => {
			this.products = response;
			this.data.change_selected_category_message(this.products, name);
		});
	}

	get_name_products(name: string): void {
		this.productsService.byNameProduct(name)
		.subscribe(response => {
			this.products = response;
			console.log(response);
			if (!response) {
				this.data.change_product_name_message(response, name+": 0 coincidencias.");
				return; 
			}
			this.data.change_product_name_message([this.products], name);
		});
	}
}
