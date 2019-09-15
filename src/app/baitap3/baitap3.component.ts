import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap3',
  templateUrl: './baitap3.component.html',
  styleUrls: ['./baitap3.component.css']
})
export class Baitap3Component implements OnInit {
  MyCard = [
    {
      "ID":"pd100",
      "Image":"l1.jpg",
      "Name":"Laptop",
      "Price":30000,
      "Quality":1
    },
    {
      "ID":"pd101",
      "Image":"l2.jpg",
      "Name":"Mobile",
      "Price":54000,
      "Quality":1
    },
    {
      "ID":"pd102",
      "Image":"l3.jpg",
      "Name":"Television",
      "Price":22000,
      "Quality":1
    },
    {
      "ID":"pd103",
      "Image":"l4.jpg",
      "Name":"Headphone",
      "Price":1300,
      "Quality":1
    }
  ]
  Tang = this.MyCard[1].Quality;
  constructor() { }

  ngOnInit() {
  }

  Increase (id) {
    for (let i = 0; i < this.MyCard.length; i++) {
      if(this.MyCard[i].ID == id) {
        this.MyCard[i].Quality++;
      }
    }
  }

  Decrease (id) {
    for (let i = 0; i < this.MyCard.length; i++) {
      if(this.MyCard[i].ID == id) {
        if(this.MyCard[i].Quality > 1) {
          this.MyCard[i].Quality--;
        }
      }
    }
  }

  TongTien () {
    let s=0;
    for (let i = 0; i < this.MyCard.length; i++) {
      s=s+this.MyCard[i].Price*this.MyCard[i].Quality;
    }
    return s;
  }

}



  
