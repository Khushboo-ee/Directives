import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-ex',
  templateUrl: './switch-ex.component.html',
  styleUrls: ['./switch-ex.component.css']
})
export class SwitchExComponent implements OnInit {

  country: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
