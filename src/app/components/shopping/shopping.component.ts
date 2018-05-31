import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';
import { ItemCart } from '../../class_objects/product';
import { DataService } from "../../services//data.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
	message:string;

  	constructor(private shoppingService: ShoppingService, private data: DataService) { }

 	length_cart : any;

	ngOnInit() {
		this.data.currentMessage.subscribe(message => this.length_cart = message);
		this.get_length_cart();
	}

 	get_length_cart(): void {
		this.shoppingService.getCart(null)
		.subscribe(response => {
			console.log('sc');
			this.length_cart = response.items.length;
		});
	}
}