import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../class_objects/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	constructor(private productsService: ProductsService, private router: Router) { }
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
		location.reload();
	}

	by_category_product_function(value: string, name: string) {
		localStorage.setItem('selected_category', value);
		localStorage.setItem('name_selected_category', name);
	}
}
