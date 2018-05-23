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

  ngOnInit() {
  }

  add_item_cart(product_id: any, quantity: any): void {
  	console.log(product_id);
  	console.log(quantity);
/*
		if (!value['user']) { return; }
		this.shoppingService.addItemCart(value as ItemCart)
		.subscribe(response => {
			console.log(response);
			
			if(response['message'] == "Created") {
				localStorage.setItem('add-cart-message', 'Agregado al carrito');
			}
			
		});
		*/
	}

}
