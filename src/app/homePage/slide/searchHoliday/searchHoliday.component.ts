import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchHoliday',
  templateUrl: './searchHoliday.component.html',
  styleUrls: ['./searchHoliday.component.css']
})
export class SearchHolidayComponent implements OnInit {

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
