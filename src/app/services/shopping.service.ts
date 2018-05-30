import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Category, Product, ItemCart, Cart } from '../class_objects/product';


@Injectable()
export class ShoppingService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		})
	};

	private email_user_login = localStorage.getItem('email');
	private new_item_cart_url = 'http://13.90.130.197/cart/add-product/'+this.email_user_login;
	private get_cart_url = 'http://13.90.130.197/cart/';

	constructor(public http: HttpClient) { }

	/** POST: send ItemCart */
	addItemCart (add_item_cart: ItemCart): Observable<ItemCart> {
		var add_item_cart2 = JSON.stringify(add_item_cart);
		console.log(add_item_cart);
		console.log(this.httpOptions);
	  	return this.http.post<ItemCart>(this.new_item_cart_url, add_item_cart, this.httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	getCart (email: string ): Observable<Cart> {
		if(email == null) {
			email = this.email_user_login;
		}
	  	return this.http.get<Cart>(this.get_cart_url+email, this.httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
	private handleError(error: HttpErrorResponse) {
	  if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    console.error('An error occurred:', error.error.message);
	  } else {
	    // The backend returned an unsuccessful response code.
	    // The response body may contain clues as to what went wrong,
	    alert(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  // return an ErrorObservable with a user-facing error message
	  return new ErrorObservable(
	    'Something bad happened; please try again later.');
	};

	private log(message: string) {
		console.log(message);
	}
}