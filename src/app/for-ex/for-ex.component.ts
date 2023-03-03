import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-ex',
  templateUrl: './for-ex.component.html',
  styleUrls: ['./for-ex.component.css']
})
export class ForExComponent implements OnInit {

  cities: string[] = ["Mumbai","Hyedrabad","Delhi","Kolkata","Chennai"];
  constructor() { }

  ngOnInit(): void {
  }

}
