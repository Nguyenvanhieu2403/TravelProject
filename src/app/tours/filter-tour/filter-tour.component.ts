import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tour',
  templateUrl: './filter-tour.component.html',
  styleUrls: ['./filter-tour.component.css']
})
export class FilterTourComponent implements OnInit {

  filters: string[] = ['All', 'Popular', 'Latest', 'Trend'];
  activeFilter: string = 'All';
  filtersData: any = {};

  showFilters: boolean = false;
  isFilterOpen: boolean = false;
  showOptions: boolean = false;
  ShowSearch: boolean = false;
  @Output() rangeChange = new EventEmitter<{ value: number, highValue: number }>();
  @Output() filtersChange = new EventEmitter<any>();

  @Input() PriceStart: any;
  @Input() PriceEnd: any;
  @Output() isShowSearch = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  showFilter() {
    this.showFilters = !this.showFilters;
    this.isFilterOpen = !this.isFilterOpen;
  }

  showSearch() {
    this.ShowSearch = !this.ShowSearch;
    this.isShowSearch.emit(this.ShowSearch);
  }

  showOption() {
    this.showOptions = !this.showOptions;
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
