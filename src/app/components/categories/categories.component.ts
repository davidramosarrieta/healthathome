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
	products: Product[];

	ngOnInit() {

	}

	by_category_product(value: string): void {
		this.productsService.byCategoryProduct(value)
		.subscribe(response => {
			console.log(response);
		});
	}
}
