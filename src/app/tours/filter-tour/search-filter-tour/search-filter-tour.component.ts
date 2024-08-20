import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options, LabelType } from 'ngx-slider-v2';
import { HotelsService } from '../../../hotels/hotels.service';

@Component({
  selector: 'app-search-filter-tour',
  templateUrl: './search-filter-tour.component.html',
  styleUrls: ['./search-filter-tour.component.css']
})
export class SearchFilterTourComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Input() isOpen!: boolean;

  @Input() PriceMax: any;
  @Input() PriceMin: any;

  stripDurations: any = [ 
    {
      id: "1",
      name: 'upto 3 nights'
    },{
        id: "2",
        name: '3 to 7 nights'
    },{
        id: "3",
        name: '7 to 11 nights'
    },{
        id: "4",
        name: '11 to 15 nights'
    },{
        id: "5",
        name: '15 to 21 nights'
    },{
        id: "6",
        name: 'above 21 nights'
    }
  ];

  travelTypes: any = [
   {
    id: "1",
    name:  'family'
   },
    {
      id: "2",
      name: 'honeymoon'
    },
    {
      id: "3",
      name: 'beach'
    },
    {
      id: "4",
      name: 'cruise'
    },
    {
      id: "5",
      name: 'adventure'
    },
    {
      id: "6",
      name: 'shopping'
    }
  ];

  stars: any = [
    {
      id: "5",
      name: 'star 5'
    },
    {
      id: "4",
      name: 'star 4'
    },
    {
      id: "3",
      name: 'star 3'
    },
    {
      id: "2",
      name: 'star 2'
    },
    {
      id: "1",
      name: 'star 1'
    }
  ];

  flightsList: any = [
    {
      id: "1",
      name: 'with flights'
    },
    {
      id: "2",
      name: 'without flights'
    }
  ];

  // Biến để lưu trữ trạng thái của checkbox
  stripDuration: any[] = [];
  traveType: any[] = [];
  starCategories: any[] = [];
  flights: any[] = [];

  @Output() rangeChange = new EventEmitter<{ value: number, highValue: number }>();
  @Output() filtersChange = new EventEmitter<{
    stripDuration: string[],
    traveType: string[],
    starCategories: string[],
    flights: string[]
  }>();


  value: number = 0;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        default:
          return "<b>$" + value + "</b>";
      }
    }
  };

  checked: boolean = false;

  constructor(config: NgbRatingConfig, private hotelsService: HotelsService) {
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
  }

  applyFilters() {
    var data = {
      stripDuration: this.stripDuration,
      traveType: this.traveType,
      starCategories: this.starCategories,
      flights: this.flights
    }
    this.hotelsService.setFilters(data);
  }

  showFilter() {
    this.close.emit();
  }

  onSliderChange() {
    this.rangeChange.emit({ value: this.value, highValue: this.highValue });
    this.applyFilters();
  }

  onFiltersChange() {
    this.filtersChange.emit({
      stripDuration: this.stripDuration,
      traveType: this.traveType,
      starCategories: this.starCategories,
      flights: this.flights
    });
  }

  toggleFacility(value: any) {
    if (this.stripDuration.includes(value)) {
      this.stripDuration = this.stripDuration.filter(item => item !== value);
    } else {
      this.stripDuration.push(value);
    }
    this.onFiltersChange();
    this.applyFilters();
  }

  toggleHostLanguage(value: any) {
    if (this.traveType.includes(value)) {
      this.traveType = this.traveType.filter(item => item !== value);
    } else {
      this.traveType.push(value);
    }
    this.onFiltersChange();
    this.applyFilters();
  }

  toggleStarCategory(value: any) {
    if (this.starCategories.includes(value)) {
      this.starCategories = this.starCategories.filter(item => item !== value);
    } else {
      this.starCategories.push(value);
    }
    this.applyFilters();
    this.onFiltersChange();
  }

  toggleDistrict(value: any) {
    if (this.flights.includes(value)) {
      this.flights = this.flights.filter(item => item !== value);
    } else {
      this.flights.push(value);
    }
    this.applyFilters();
    this.onFiltersChange();
  }

  getStarRating(star: any): number {
    return parseInt(star.id, 10);
  }

}
