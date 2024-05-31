import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchHotel',
  templateUrl: './searchHotel.component.html',
  styleUrls: ['./searchHotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  city: string | undefined;
  dateIn: Date[] | undefined;
  dateOut: Date[] | undefined;
  guests: any = 1;
  FromDate: any;
  ToDate: any; 

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    let fromDate = new Date();
    let toDat = new Date();
    let toDate = toDat.setDate(toDat.getDate() + 7);
    this.FromDate = this.datePipe.transform(fromDate, 'dd/MM/yyyy');
    this.ToDate = this.datePipe.transform(toDate, 'dd/MM/yyyy');
  }

  MinusGuests() {
    this.guests--;
  }

  PlusGuests() {
    this.guests++;
  }

}
