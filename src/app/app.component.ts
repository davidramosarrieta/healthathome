import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private router: Router) {}
	title = 'app';

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;

	logout(){
		this.is_login = false;
		this.is_guest = true;
		localStorage.removeItem('token');
		this.router.navigate(['/home']);
	}
}
