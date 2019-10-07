import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-sv',
  templateUrl: './detail-sv.component.html',
  styleUrls: ['./detail-sv.component.css']
})
export class DetailSVComponent implements OnInit {
  sID;
  Student: any;
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
    
  courses = [
    {
      CourseID:1050,
      Title:"Chemistry",
      Credits:3
    },
    {
      CourseID:4022,
      Title:"Python",
      Credits:3
    },
    {
      CourseID:4041,
      Title:"Macroeconomics",
      Credits:3
    },
    {
      CourseID:1045,
      Title:"Calculus",
      Credits:4
    },
    {
      CourseID:3141,
      Title:"DjAngo",
      Credits:4
    },
    {
      CourseID:2021,
      Title:"Composition",
      Credits:3,},
    {
      CourseID:2042,
      Title:"Literature",
      Credits:4
    }
  ];
             
  enrollments = [
    {
      StudentID:1,
      CourseID:1050,
      Grade:'A'},
    {
      StudentID:1,
      CourseID:4022,
      Grade:'C'},
    {
      StudentID:1,
      CourseID:4041,
      Grade:'B'},
    {
      StudentID:2,
      CourseID:1045,
      Grade:'B'},
    {
      StudentID:2,
      CourseID:3141,
      Grade:'F'},
    {
      StudentID:2,
      CourseID:2021,
      Grade:'F'},
    {
      StudentID:3,
      CourseID:1050,
      Grade:'B'},
    {
      StudentID:4,
      CourseID:1050,
      Grade:'B'},
    {
      StudentID:4,
      CourseID:4022,
      Grade:'F'},
    {
      StudentID:5,
      CourseID:4041,
      Grade:'C'},
    {
      StudentID:6,
      CourseID:1045,
      Grade:'B'},
    {
      StudentID:6,
      CourseID:3141,
      Grade:'A'},
  ];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.sID=+para.get('ID');
    });
    this.Student = this.students.find(a=>a.ID===this.sID);
    var el = document.getElementById("title");
    el.innerText = this.Student.FirstName + " " + this.Student.LastName;  
    var ln = document.getElementById("lastname");
    ln.innerText = this.Student.LastName;
    var fn = document.getElementById("firstname");
    fn.innerText = this.Student.FirstName;
    var Ed = document.getElementById("Enrolldate");
    Ed.innerText = this.Student.EnrollDate;
  }
}  

