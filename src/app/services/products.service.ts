import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retry } from 'rxjs/operators';


import { Product } from '../class_objects/product';


@Injectable()
export class ProductsService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		})
	};

	private by_category_url = 'http://13.90.130.197/product/category/';

	private by_name_url = 'http://13.90.130.197/product/name/';

	private by_id_url = 'http://13.90.130.197/product/';


  	constructor(public http: HttpClient) { }

  	//getProductos(): Observable<any>{
    	//return this.http.get(this.login_url+'productos');
	//}
	/** GET product by category. Will 404 if id not found */

	byCategoryProduct (category: string ): Observable<[Product]> {
	  	return this.http.get<[Product]>(this.by_category_url+category, this.httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	byNameProduct (name: string ): Observable<[Product]> {
	  	return this.http.get<[Product]>(this.by_name_url+name, this.httpOptions)
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
	    console.error(
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
