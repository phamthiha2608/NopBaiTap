import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  isShow=true;
  ListProduct = [
    {
      "productId":"1",
      "productName":"Leaf Rake",
      "productCode":"gdn-0011",
      "relessDate":"March 19,2016",
      "price":"$19.95",
      "starRating":"3.2",
      "imageUrl":"h1.jpg"             
    },
    {
      "productId":"2",
      "productName":"Garden Cart",
      "productCode":"gdn-0023",
      "relessDate":"March 18,2016",
      "price":"$32.99",
      "starRating":3.2,
      "imageUrl":"h2.jpg"             
    },
    {
      "productId":"3",
      "productName":"Hammer",
      "productCode":"tbx-0048",
      "relessDate":"May 21,2016",
      "price":"$8.90",
      "starRating":3.2,
      "imageUrl":"h3.jpg"             
    },
    {
      "productId":"4",
      "productName":"Saw",
      "productCode":"tbx-0022",
      "relessDate":"May 15,2016",
      "price":"$11.55",
      "starRating":3.2,
      "imageUrl":"h4.jpg"             
    },
    {
      "productId":"5",
      "productName":"Video Game Controller",
      "productCode":"gmg-0042",
      "relessDate":"October 15,2015",
      "price":"$35.95",
      "starRating":3.2,
      "imageUrl":"h5.jpg"             
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  AnHien() {
    this.isShow=!this.isShow;
  }
}
