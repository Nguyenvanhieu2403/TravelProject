import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-FilterHotels',
  templateUrl: './FilterHotels.component.html',
  styleUrls: ['./FilterHotels.component.css']
})
export class FilterHotelsComponent implements OnInit {

  filters: string[] = ['All', 'Popular', 'Latest', 'Trend'];
  activeFilter: string = 'All';
  filtersData: any = {};

  showFilters: boolean = false;
  isFilterOpen: boolean = false;
  showOptions: boolean = false;
  @Output() rangeChange = new EventEmitter<{ value: number, highValue: number }>();
  @Output() filtersChange = new EventEmitter<any>();

  @Input() PriceStart: any;
  @Input() PriceEnd: any;

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  showFilter() {
    this.showFilters = !this.showFilters;
    this.isFilterOpen = !this.isFilterOpen;
  }

  showOption() {
    this.showOptions = !this.showOptions;
  }

  constructor() { }

  ngOnInit() {
  }

  onRangeChange(event: { value: number, highValue: number }) {
    this.rangeChange.emit(event);
  }

  onFiltersChange(filtersData: {
    facilities: string[],
    hostLanguages: string[],
    starCategories: string[],
    districts: string[]
  }) {
    this.filtersData = filtersData;
    // Gửi dữ liệu lên component cha nếu cần
    this.filtersChange.emit(this.filtersData);
  }

}
