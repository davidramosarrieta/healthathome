import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private length_cart_messageSource = new BehaviorSubject<string>("0");
	length_cartMessage = this.length_cart_messageSource.asObservable();

	

	constructor() { }

	change_length_cart_message(length_cart_message: string) {
		this.length_cart_messageSource.next(length_cart_message)
	}


}