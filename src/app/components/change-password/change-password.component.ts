import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { ChangePassword } from '../../class_objects/user';

import { Router } from "@angular/router";
import { Toast } from 'materialize-css/js/toasts.js';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;

	change_password_message = localStorage.getItem('change-password-message');
	constructor(private userService: UserService, private router: Router) {}

	ngOnInit() {
	}

	changePassword(value: any): void {
		if (!value['newPassword'] || !value['oldPassword'] || !value['user']) { return; }
		this.userService.changePasswordUser(value as ChangePassword)
		.subscribe(
			response => {
				console.log('response:');
				console.log(response);
				if(this.is_login) {
					this.router.navigate(['/categories']);
				}else{
					location.reload(); 
				}
			},
			error => {
				console.log('error:');
				console.log(error);
			}
		);
	}
}
