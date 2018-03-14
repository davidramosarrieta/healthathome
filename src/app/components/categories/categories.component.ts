import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	constructor() { }
	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;

	ngOnInit() {
	}

}
