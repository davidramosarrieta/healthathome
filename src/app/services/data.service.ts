import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	length_cart_messageSource = new BehaviorSubject<string>("0");
	length_cartMessage = this.length_cart_messageSource.asObservable();

	selected_category_messageSource = new BehaviorSubject<any>(null);
	selected_categoryMessage = this.selected_category_messageSource.asObservable();

	category_name_messageSource = new BehaviorSubject<string>(" ");
	category_nameMessage = this.category_name_messageSource.asObservable();

	product_name_messageSource = new BehaviorSubject<string>(" ");
	product_nameMessage = this.product_name_messageSource.asObservable();

	constructor() { }

	change_length_cart_message(length_cart_message: string) {
		this.length_cart_messageSource.next(length_cart_message)
	}

	change_selected_category_message(products: any, name: string) {
		this.selected_category_messageSource.next(products);
		this.category_name_messageSource.next(name);
		this.product_name_messageSource.next("");
	}

	change_product_name_message(products: any, name: string) {
		this.selected_category_messageSource.next(products);
		this.product_name_messageSource.next(name);
		this.category_name_messageSource.next("");
	}
}