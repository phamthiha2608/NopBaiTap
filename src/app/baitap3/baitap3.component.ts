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
      "Img":"asus-x407ua-i5-8250u-4gb-16gb-1tb-win10-bv485t-thumb33397-2-600x600.jpg",
      "Name":"Laptop",
      "Price":"30000",
      "Quality":1
    },
    {
      "ID":"pd101",
      "Img":"vivo-y93-32gb-black-400x460.png",
      "Name":"Mobile",
      "Price":"54000",
      "Quality":1
    },
    {
      "ID":"pd102",
      "Img":"tải xuống.jpg",
      "Name":"Television",
      "Price":"22000",
      "Quality":1
    },
    {
      "ID":"pd103",
      "Img":"tai-nghe-chup-tai-sony-mdr-100aapyce-vang-600x600.jpg",
      "Name":"Headphone",
      "Price":"1300",
      "Quality":1
    }
  ]
  Tang = this.MyCard[1].Quality;
  constructor() { }

  ngOnInit() {
  }
  Up (id) {
    for (let i = 0; i < this.MyCard.length; i++) {
      if(this.MyCard[i].ID === id) {
        this.MyCard[i].Quality++;
      }
    }
  }
  Down (id) {
    for (let i = 0; i < this.MyCard.length; i++) {
      if(this.MyCard[i].ID === id) {
        if(this.MyCard[i].Quality > 1) {
          this.MyCard[i].Quality--;
        }
      }
    }
  }

}



  
