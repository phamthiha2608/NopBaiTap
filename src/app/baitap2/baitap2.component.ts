import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {
  TTSinhVien = [
    {
      "fullName": 'Nguyễn Văn Tèo',
      "birthday": '20-01-1999',
      "gender": 'Nam',
      "photo": 'assets/s1.jpg',
      "mark": 8.5
    },
    {
      "fullName": 'Phan thị nở',
      "birthday": '20-12-1999',
      "gender": 'Nữ',
      "photo":'assets/s2.jpg',
      "mark": 8.5
    },
    {
      "fullName": 'Nguyễn khá Bảnh',
      "birthday": '20-01-2000',
      "gender": 'Nam',
      "photo":'assets/s3.jpg',
      "mark": 8.5
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
