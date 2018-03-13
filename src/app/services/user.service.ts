import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { LoginUser } from '../class_objects/user';


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': ''
	})
};
if (localStorage.getItem('token')){
	httpOptions.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}

@Injectable()
export class UserService {

	private login_url = 'http://13.90.130.197/login';

	

  	constructor(public http: HttpClient) { }

  	//getProductos(): Observable<any>{
    	//return this.http.get(this.login_url+'productos');
	//}

	/** POST: add a new hero to the database */
	logUser (login_user: LoginUser): Observable<LoginUser> {
	  	return this.http.post<LoginUser>(this.login_url, login_user, httpOptions)
	    .pipe(
	      catchError(this.handleError('logUser', login_user))
	    );
	}

	/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead

		// TODO: better job of transforming error for user consumption
		this.log(`${operation} failed: ${error.message}`);

		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}

	private log(message: string) {
		console.log(message);
	}

}
