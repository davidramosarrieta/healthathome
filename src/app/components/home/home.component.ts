import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoginUser } from '../../class_objects/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	constructor(private userService: UserService, private router: Router) { }
	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;

	ngOnInit() {
	}

	login(value: any): void {
		if (!value['user'] || !value['password']) { return; }
		this.userService.logUser(value as LoginUser)
		.subscribe(response => {
			if(response['token'] != null) {
				localStorage.setItem('token', response['token']);
				this.router.navigate(['/products']);
			}
		});
	}
}
