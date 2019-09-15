import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sv',
  templateUrl: './list-sv.component.html',
  styleUrls: ['./list-sv.component.css']
})
export class ListSVComponent implements OnInit {
  students = [
    {
      "ID":1,
      "FirstName":"Carson",
      "LastName":"Alexander",
      "EnrollDate": "09-01-2005 12:00:00 AM"
    },          
    {
      "ID":2,
      "FirstName":"Meredith",
      "LastName":"Alonso",
      "EnrollDate": "09-01-2002 12:00:00 AM"
    },         
    {
      "ID":3,
      "FirstName":"Arturo",
      "LastName":"Anand",
      "EnrollDate": "09-01-2003 12:00:00 AM"
    },          
    {
      "ID":4,
      "FirstName":"Gytis",
      "LastName":"Barzdukas",
      "EnrollDate":"09-01-2002 12:00:00 AM"
    },          
    {
      "ID":5,
      "FirstName":"Yan",
      "LastName":"Li",
      "EnrollDate":"09-01-2002 12:00:00 AM"
    },      
    {
      "ID":6,
      "FirstName":"Peggy",
      "LastName":"Justice",
      "EnrollDate":"09-01-2001 12:00:00 AM"
    },  
    {
      "ID":7,
      "FirstName":"Laura",
      "LastName":"Norman",
      "EnrollDate":"09-01-2003 12:00:00 AM"
    },    
    {
      "ID":8,
      "FirstName":"Nino",
      "LastName":"Olivetto",
      "EnrollDate":"09-01-2005 12:00:00 AM"
    }
  ];
    
  constructor() { }

  ngOnInit() {
  }
  n;
  thongtin(id,fname,lname) {
    var el = document.getElementById("thongbao");
    el.innerText = "Bạn có chắc chắn xóa sinh viên có tên " + fname + " " + lname;   
    this.n=id;
  }
  Xoa() {
    var x = this.students;
    x.splice(this.n - 1, 1);
    this.students = x;
    var hidemodal = document.getElementById('myModal');
    hidemodal.style.display = "none";
  }
}
