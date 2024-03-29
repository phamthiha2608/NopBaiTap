import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  producer =[
    {
      "productName":"Leaf Rake",
      "productCode":"gdn-0011",
      "productDes":"Leaf rake with 48-inch wooden handle.",
      "relessDate":"March 19,2016",
      "price":"$19.95",
      "imageUrl":"h1.jpg"             
    },
    {
      "productName":"Garden Cart",
      "productCode":"gdn-0023",
      "productDes":"Leaf rake with 48-inch wooden handle.",
      "relessDate":"March 18,2016",
      "price":"$32.99",
      "imageUrl":"h2.jpg"             
    },
    {
      "productName":"Hammer",
      "productCode":"tbx-0048",
      "productDes":"Leaf rake with 48-inch wooden handle.",
      "relessDate":"May 21,2016",
      "price":"$8.90",
      "imageUrl":"h3.jpg"             
    },
    {
      "productName":"Saw",
      "productCode":"tbx-0022",
      "productDes":"Leaf rake with 48-inch wooden handle.",
      "relessDate":"May 15,2016",
      "price":"$11.55",
      "imageUrl":"h4.jpg"             
    },
    {
      "productName":"Video Game Controller",
      "productCode":"gmg-0042",
      "productDes":"Leaf rake with 48-inch wooden handle.",
      "relessDate":"October 15,2015",
      "price":"$35.95",
      "imageUrl":"h5.jpg"             
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
