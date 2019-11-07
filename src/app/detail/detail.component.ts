import { Component, OnInit } from '@angular/core';
import {ProductService} from '../DAL/product.service';
import {ActivatedRoute} from '@angular/router';
import {CartserviceService} from '../cartservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  categories:any;
  guitars:any;
  cid:number;
  id: number;
  name: any;
  guitar:any;
  features:any;
  discount= 30;
  array = {
    price: this.guitar,
    discount: null,
    Quanti: 1
  }


  constructor(private Product:ProductService, private route:ActivatedRoute,private cart:CartserviceService) { }

  ngOnInit() {    
    this.Product.getAllCategories().subscribe(data=>{
      this.categories=data
    })
    this.Product.getAllProduct().subscribe(data=>{
      this.guitars=data
      this.Data();
    })

    
    // this.loadData();
  }
  addToCart(guitar) {
    this.cart.addToCart(guitar);
  }
  Data(){
    this.route.paramMap.subscribe(para=>{this.id=+para.get('id');
  })
    this.guitar=this.guitars.find(p=>p.id===this.id)
    this.features=this.guitar.newfeature;
  }
}
