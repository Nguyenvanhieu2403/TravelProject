import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchCar',
  templateUrl: './searchCar.component.html',
  styleUrls: ['./searchCar.component.css']
})
export class SearchCarComponent implements OnInit {

  city: string | undefined;
  dateIn: Date[] | undefined;
  dateOut: Date[] | undefined;
  guests: any = 1;
  FromDate: any;
  ToDate: any; 

  constructor() { }

  ngOnInit() {
  }

}
