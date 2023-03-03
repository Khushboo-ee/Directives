import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-std-info',
  templateUrl: './std-info.component.html',
  styleUrls: ['./std-info.component.css']
})
export class StdInfoComponent implements OnInit {

  sinfo:Student[]=[
    new Student(1,"Satyam","Java",1500),
    new Student(2,"Saroj","Java",1500),
    new Student(3,"Aditya","Java",1500),
    new Student(4,"Mahesh","Java",1500)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  DeleteStudent(i:any){
    if (confirm("Are you sure you want to remove this")) {
      this.sinfo.splice(i,1)
    } 
  }
newstd : Student = new Student(0,"","",0.0);
  AddStudent(){
      this.sinfo.push(new Student(this.newstd.rollno, this.newstd.sname, this.newstd.course, this.newstd.fees));
      this.newstd.rollno = 0;
      this.newstd.sname = "";
      this.newstd.course = "";
      this.newstd.fees = 0.0;
  }
}
