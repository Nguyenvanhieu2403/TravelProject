import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchFlight',
  templateUrl: './searchFlight.component.html',
  styleUrls: ['./searchFlight.component.css']
})
export class SearchFlightComponent implements OnInit {

  city: string | undefined;
  dateIn: Date[] | undefined;
  dateOut: Date[] | undefined;
  Adult: any = 1;
  Children: any = 1;
  FromDate: any;
  ToDate: any; 
  StyleTravel: any;
  isShow: boolean = false;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    let fromDate = new Date();
    let toDat = new Date();
    let toDate = toDat.setDate(toDat.getDate() + 7);
    this.FromDate = this.datePipe.transform(fromDate, 'dd/MM/yyyy');
    this.ToDate = this.datePipe.transform(toDate, 'dd/MM/yyyy');
    this.StyleTravel = 'display: none';
  }

  MinusAdult() {
    if(this.Adult > 1){
      this.Adult--;
    }
  }

  PlusAdult() {
    this.Adult++;
  }

  MinusChildren() {
    if(this.Children > 1){
      this.Children--;
    }
  }

  PlusChildren() {
    this.Children++;
  }

  Show() {
    this.isShow = !this.isShow;
    if(this.isShow){
      this.StyleTravel = 'display: block';
    }
    else{
      this.StyleTravel = 'display: none';
    }
  }

}
