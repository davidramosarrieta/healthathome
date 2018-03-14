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

	change_password_message = localStorage.getItem('change-password-message');
	constructor(private userService: UserService, private router: Router) {}

	ngOnInit() {
	}

	changePassword(value: any): void {
		console.log('value');
		console.log(value);
		if (!value['newPassword'] || !value['oldPassword'] || !value['user']) { return; }
		this.userService.changePasswordUser(value as ChangePassword)
		.subscribe(response => {
			console.log('response');
			console.log(response);
			this.router.navigate(['/categories']);
		});
	}

}
