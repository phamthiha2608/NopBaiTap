import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import {ProductService} from '../DAL/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  categories:any;
  items;
  guitar:any;
  id: number;
  guitars:any;
    update = {
    "product": this.items,
    "name": null,
    "email": null,
    "number": null,
    "date": new Date(),
  };
  
    

    constructor(private Product:ProductService, private route:ActivatedRoute,private cart:CartserviceService) { }
  
    ngOnInit() {    
      this.Product.getAllCategories().subscribe(data=>{
        this.categories=data
      })
      this.Product.getAllProduct().subscribe(data=>{
        this.guitars=data
        this.Data();
      })
      this.items=this.cart.getItems();
    }
    
    Data(){
      this.route.paramMap.subscribe(para=>{this.id=+para.get('id');
    })
      this.guitars=this.guitar.find(p=>p.id===this.id)
    }
    

    ThanhTien(a,b) {
      return a*b
   }
 
   TongTien() {
     let s =0;
     this.items.forEach(element => {
       if(element.Id != "")
       {
       s = s + this.ThanhTien(element.soluong,element.price)
       }
     });
     return s;
   }

    Update() {
      if(this.update.name != null && this.update.email != null && this.update.number != null) {
       this.cart.addToCart(this.guitar);
        this.guitars = null;
      }
       else {
         alert('Bạn vui lòng nhập đầy đủ thông tin');
       }
    }
  }




  
  

  
