import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import {ProductService} from '../DAL/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  categories:any;
  guitars:any;
  update: any;
  guitar:any;
  Id;
  constructor(private Product:ProductService,private cart:CartserviceService ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.Product.getAllCategories().subscribe(data=>{
      this.categories=data
    })
    this.Product.getAllProduct().subscribe(data=>{
      this.guitars=data
      this.Data();
    })
    this.update = this.cart.getItems();
  }

  
  Data(){
    this.route.paramMap.subscribe(para=>{this.Id=+para.get('id');
  })
    this.guitars=this.guitar.find(p=>p.id===this.Id)
  }
  
}
