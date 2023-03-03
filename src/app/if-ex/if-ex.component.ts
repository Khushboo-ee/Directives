import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-ex',
  templateUrl: './if-ex.component.html',
  styleUrls: ['./if-ex.component.css']
})
export class IfExComponent implements OnInit {

  marks: number = 20;
  b: boolean = false;
  //mycss:string = "";

  constructor() {
    if (this.marks>=35) {
      this.b = true;      
    } else {
      this.b = false;   
    }
   }

  ngOnInit(): void {
  }

}
