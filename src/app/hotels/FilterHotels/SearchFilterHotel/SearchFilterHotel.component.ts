import { Component, EventEmitter, input, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { LabelType, Options } from 'ngx-slider-v2';
import { HotelsService } from '../../hotels.service';

@Component({
  selector: 'app-SearchFilterHotel',
  templateUrl: './SearchFilterHotel.component.html',
  styleUrls: ['./SearchFilterHotel.component.css'],
  providers: [NgbRatingConfig],
})
export class SearchFilterHotelComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Input() isOpen!: boolean;

  @Input() PriceMax: any;
  @Input() PriceMin: any;

  facilitiesList: any = ['restaurant', 'wifi', 'spa_salon', 'pet_allowed', 'parking', 'swimming_pool', 'fitness_center']

  // Biến để lưu trữ trạng thái của checkbox
  facilities: string[] = [];
  hostLanguages: string[] = [];
  starCategories: string[] = [];
  districts: string[] = [];

  @Output() rangeChange = new EventEmitter<{ value: number, highValue: number }>();
  @Output() filtersChange = new EventEmitter<{
    facilities: string[],
    hostLanguages: string[],
    starCategories: string[],
    districts: string[]
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
      facilities: this.facilities,
      hostLanguages: this.hostLanguages,
      starCategories: this.starCategories,
      districts: this.districts
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
      facilities: this.facilities,
      hostLanguages: this.hostLanguages,
      starCategories: this.starCategories,
      districts: this.districts
    });
  }

  toggleFacility(value: string) {
    if (this.facilities.includes(value)) {
      this.facilities = this.facilities.filter(item => item !== value);
    } else {
      this.facilities.push(value);
    }
    this.onFiltersChange();
    this.applyFilters();
  }

  toggleHostLanguage(value: string) {
    if (this.hostLanguages.includes(value)) {
      this.hostLanguages = this.hostLanguages.filter(item => item !== value);
    } else {
      this.hostLanguages.push(value);
    }
    this.onFiltersChange();
    this.applyFilters();
  }

  toggleStarCategory(value: string) {
    if (this.starCategories.includes(value)) {
      this.starCategories = this.starCategories.filter(item => item !== value);
    } else {
      this.starCategories.push(value);
    }
    this.applyFilters();
    this.onFiltersChange();
  }

  toggleDistrict(value: string) {
    if (this.districts.includes(value)) {
      this.districts = this.districts.filter(item => item !== value);
    } else {
      this.districts.push(value);
    }
    this.applyFilters();
    this.onFiltersChange();
  }

  getStarRating(star: string): number {
    const starValue = star.split('_')[1];
    return parseInt(starValue, 10);
  }

}
