import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';
import { ItemCart } from '../../class_objects/product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  	constructor(private shoppingService: ShoppingService) { }

 	length_cart : any;

	ngOnInit() {
		this.get_length_cart();
	}

 	get_length_cart(): void {
		this.shoppingService.getCart(null)
		.subscribe(response => {
			this.length_cart = response.items.length;
		});
	}
}