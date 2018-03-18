import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retry } from 'rxjs/operators';


import { LoginUser, CreateUser, ChangePassword } from '../class_objects/user';


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': '',
		'Content-Security-Policy':'default-src "self" *http://13.90.130.197'
	})
};
if (localStorage.getItem('token')){
	httpOptions.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}

@Injectable()
export class UserService {

	private login_url = 'http://13.90.130.197/login';

	private new_user_url = 'http://13.90.130.197/user';

	private change_password_url = 'http://13.90.130.197/login/change-password';

	

  	constructor(public http: HttpClient) { }

  	//getProductos(): Observable<any>{
    	//return this.http.get(this.login_url+'productos');
	//}

	/** POST: log User */
	logUser (login_user: LoginUser): Observable<LoginUser> {
	  	return this.http.post<LoginUser>(this.login_url, login_user, httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	/** POST: log User */
	createUser (create_user: CreateUser): Observable<CreateUser> {
	  	return this.http.post<CreateUser>(this.new_user_url, create_user, httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	/** POST: log User */
	changePasswordUser (change_password: ChangePassword): Observable<ChangePassword> {
	  	return this.http.post<ChangePassword>(this.change_password_url, change_password, httpOptions)
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
