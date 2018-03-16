import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from './class_objects/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private userService: UserService, private router: Router) {}
	title = 'app';

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;
	email_user_login = localStorage.getItem('email');

	login(value: any): void {
		if (!value['user'] || !value['password']) { return; }
		this.userService.logUser(value as LoginUser)
		.subscribe(response => {
			console.log(response);
			if(response['token'] != null) {
				localStorage.setItem('token', response['token']);
				localStorage.setItem('email', value['user']);
				this.is_login = true;
				this.is_guest = false;
				this.router.navigate(['/categories']);
			}
		});
	}

	logout(){
		this.is_login = false;
		this.is_guest = true;
		localStorage.removeItem('token');
		localStorage.removeItem('email');
		location.reload(); 
	}
}
