import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  marks:number=20;
  color:string="";
  constructor() {

    if(this.marks>=35)
        this.color = "css2";  // css2, and css1 are  css  class names 
    else
        this.color = "css1";   
   }
  

  ngOnInit(): void {
  }

}
