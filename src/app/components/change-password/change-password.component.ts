import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Toast } from 'materialize-css/js/toasts.js';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

	constructor() { }

	change_password_message = localStorage.getItem('change-password-message');

	ngOnInit() {
	}

}
