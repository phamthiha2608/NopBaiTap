import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product :any;
  constructor(private cart:CartService) {}

  ngOnInit() {
    this.product=this.cart.getItems();
  }

}
