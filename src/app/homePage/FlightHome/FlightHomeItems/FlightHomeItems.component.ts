import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-FlightHomeItems',
  templateUrl: './FlightHomeItems.component.html',
  styleUrls: ['./FlightHomeItems.component.css']
})
export class FlightHomeItemsComponent implements OnInit {

  @Input() src: any;
  @Input() title: any;
  @Input() name: any;
  @Input() description: any;
  @Input() price: any;

  constructor() { }

  ngOnInit() {
  }

}
