import { Component, OnInit } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  showFormEdit:boolean = false; 
  selectStudentId: number;


  formStudent = {
    id:0,
    fullName:'',
    birthday:new Date().toISOString().substring(0,10),
    mark:0,
  };
  
  students: Student[] = [
    {
      id: 1,
      fullName: 'Nguyễn văn tèo',
      birthday: new Date(2019, 6, 30),
      mark: 8
    },
    {
      id: 2,
      fullName: 'Phan thị nở',
      birthday: new Date(2019, 2, 29),
      mark: 8
    },
  ];
    
  constructor() { }

  ngOnInit() {
  }
  gradeStudent(student: Student) {
    if (student.mark >= 0 && student.mark < 5) { 
      return 'Yếu/Kém'
    }
    else {
      if (5 <= student.mark && student.mark <= 8) return 'Trung bình/Khá' 
      else if (student.mark > 8) 
      return 'Giỏi/Xuất sắc'
    }
  }

  Edit(student) {
    this.showFormEdit=true;
    this.formStudent = {
      id:student.id,
      fullName:student.fullName,
      birthday:new Date(student.birthday).toISOString().substring(0,10),
      mark:student.mark,
    };
  }

  addStudent () {
    this.formStudent.id=this.students.length++;
    this.students.push(Object.assign(this.formStudent));
    this.students=this.students;
    this.formStudent = {
      id:0,
      fullName:'',
      birthday:new Date().toISOString().substring(0,10),
      mark:0,
    };
  }

  showEditStudent(student: Student) {
    this.showFormEdit=true;
    this.formStudent = {
      id:student.id,
      fullName:student.fullName,
      birthday:new Date(student.birthday).toISOString().substring(0,10),
      mark:student.mark,
    }
    this.selectStudentId=student.id;
  }

  saveEdit(student: Student) {
    let index = this.students.indexOf(this.students.find (stu => stu.id === this.selectStudentId));
    this.students[index] = Object.assign(this.formStudent);
    this.showFormEdit=false;
  }
}
