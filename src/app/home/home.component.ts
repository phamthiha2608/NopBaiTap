import { Component, OnInit } from '@angular/core';
import {ProductService} from '../DAL/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    categories:any;
    guitars:any=[];
      cid:number;
  
    constructor(private Product:ProductService,private route:ActivatedRoute) { }
    ngOnInit() {
    this.Product.getAllCategories().subscribe(data=>{
            this.categories=data
        });
        this.LoadData();
    }

  LoadData() {
    this.route.paramMap.subscribe(para => {
        this.cid=+para.get('cid');
    });
        if(this.cid!=0) {
            this.Product.getAllProduct().subscribe(data => {
                this.guitars=data;
                this.guitars=this.guitars.filter(p => p.cid===this.cid);
            });
        }
        else {
            this.Product.getAllProduct().subscribe(data => {
                this.guitars=data;
            });
        }
    }

}
