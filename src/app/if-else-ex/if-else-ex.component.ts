import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-ex',
  templateUrl: './if-else-ex.component.html',
  styleUrls: ['./if-else-ex.component.css']
})
export class IfElseExComponent implements OnInit {

  marks: number = 0;
  b: boolean = false;
  mycss: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  CheckMarks()
  {
    if(this.marks>=35){
        this.b=true;
        this.mycss =  "mycss2";
    }
    else{
      this.b=false;
      this.mycss =  "mycss1";
    }
  }
}
