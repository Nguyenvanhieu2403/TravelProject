import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  sliderValue = { value: 0, highValue: 100 };
  PriceValue = { value: 0, highValue: 100 };
  filters: any = {};

  PriceStart: number = 0;
  PriceEnd: number = 1000;

  PriceMin: number = 0;
  PriceMax: number = 1000;

  constructor() { }

  ngOnInit() {
  }

  onPriceChange(event: { value: number, highValue: number }) {
    setTimeout(() => {
      this.PriceValue = event;
      this.PriceMin = event.value;
      this.PriceMax = event.highValue;
    });
  }

  onRangeChange(event: { value: number, highValue: number }) {
    this.sliderValue = event;
    this.PriceStart = event.value;
    this.PriceEnd = event.highValue;
  }

  onFiltersChange(filters: any) {
    this.filters = filters;
  }

}
