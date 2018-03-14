import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

	constructor() { }
	is_login = localStorage.getItem('token') != null;
	is_guest = localStorage.getItem('token') == null;

	ngOnInit() {
		
	}

}
