import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { HotelsService } from '../hotels.service';
import { FilterHotelDataServiceService } from '../../service/transfer/FilterHotelData-service.service';
import { Router } from '@angular/router';

interface Filter {
  type: string;
  value: string;
}

interface Filters {
  districts: string[];
  facilities: string[];
  hostLanguages: string[];
  starCategories: string[];
}

interface HotelItem {
  id: number;
  name: string;
  location: string;
  description: string;
  review: number;
  rating: number;
  priceOld: number;
  priceNew: number;
  image: string;
  facilities: {
    name: string[]; // Mảng các tên cơ sở vật chất
  };
  offer?: string; // Có thể có hoặc không có thuộc tính offer
  language: string;
}

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-FilterHotelsData',
  templateUrl: './FilterHotelsData.component.html',
  styleUrls: ['./FilterHotelsData.component.css'],
})


export class FilterHotelsDataComponent implements OnInit {

  @Input() PriceStart: any;
  @Input() PriceEnd: any;
  @Input() filters: { [key: string]: string[] } = {};

  @Output() PriceChange = new EventEmitter<{ value: number, highValue: number }>();
  

  HotelItems: HotelItem[] = [
    {
      id: 1,
      name: "the venetian",
      location: " Newyork",
      description: "The Venetian Hotel is a lavish resort in Las Vegas, featuring opulent Italian-inspired architecture, complete with indoor canals and gondola rides",
      review: 26412,
      rating: 4,
      priceOld:  130,
      priceNew:  124,
      image: "../../../assets/img/hotels/Items/1.jpg",
      facilities: {
        name:["Pet Allowed", "Restaurant"],
      },
      offer: "Recommended",
      language: "English"
    },
    {
      id: 2,
      name: "The Ritz-Carlton",
      location: "Paris",
      description: "Nestled in the heart of Paris, this iconic hotel offers exquisite luxury and impeccable service, providing an elegant retreat near the Louvre",
      review: 25000,
      rating: 2,
      priceOld:  120,
      priceNew:  117,
      image: "../../../assets/img/hotels/Items/2.jpg",
      facilities: {
        name:["Swimming Pool", "fitness Center"],
      },
      offer: "Hot Deal",
      language: "Suomi"
    },
    {
      id: 3,
      name: "Mandarin Oriental",
      location: " Tokyo",
      description: "Set in the bustling metropolis of Tokyo, this high-rise hotel boasts panoramic city views and a harmonious blend of Japanese aesthetics and contemporary luxury",
      review: 26412,
      rating: 5,
      priceOld:  100,
      priceNew:  985,
      image: "../../../assets/img/hotels/Items/3.jpg",
      facilities: {
        name:["Wifi", "Restaurant"],
      },
      offer: "Certified",
      language: "Espanol"
    },
    {
      id: 4,
      name: "Four Seasons Safari",
      location: "Tanzania",
      description: "Surrounded by the vast plains of the Serengeti, this safari lodge offers a unique blend of wildlife adventure and five-star comfort, allowing guests to experience the wonders of Africa",
      review: 26412,
      rating: 3,
      priceOld:  150,
      priceNew:  142,
      image: "../../../assets/img/hotels/Items/4.jpg",
      facilities: {
        name:["Parking", "Restaurant"],
      },
      language: "French"
    },
    {
      id: 5,
      name: "the venetian 111",
      location: " Newyork",
      description: "The Venetian Hotel is a lavish resort in Las Vegas, featuring opulent Italian-inspired architecture, complete with indoor canals and gondola rides",
      review: 26412,
      rating: 4,
      priceOld:  130,
      priceNew:  124,
      image: "../../../assets/img/hotels/Items/1.jpg",
      facilities: {
        name:["Pet Allowed", "Restaurant"],
      },
      offer: "Recommended",
      language: "English"
    },
    {
      id: 6,
      name: "The Ritz-Carlton 111",
      location: "Paris",
      description: "Nestled in the heart of Paris, this iconic hotel offers exquisite luxury and impeccable service, providing an elegant retreat near the Louvre",
      review: 25000,
      rating: 2,
      priceOld:  120,
      priceNew:  117,
      image: "../../../assets/img/hotels/Items/2.jpg",
      facilities: {
        name:["Swimming Pool", "fitness Center"],
      },
      offer: "Hot Deal",
      language: "Suomi"
    },
    {
      id: 7,
      name: "Mandarin Oriental 111",
      location: " Tokyo",
      description: "Set in the bustling metropolis of Tokyo, this high-rise hotel boasts panoramic city views and a harmonious blend of Japanese aesthetics and contemporary luxury",
      review: 26412,
      rating: 5,
      priceOld:  100,
      priceNew:  985,
      image: "../../../assets/img/hotels/Items/3.jpg",
      facilities: {
        name:["Wifi", "Restaurant"],
      },
      offer: "Certified",
      language: "Espanol"
    },
    {
      id: 8,
      name: "Four Seasons Safari 111",
      location: "Tanzania",
      description: "Surrounded by the vast plains of the Serengeti, this safari lodge offers a unique blend of wildlife adventure and five-star comfort, allowing guests to experience the wonders of Africa",
      review: 26412,
      rating: 3,
      priceOld:  150,
      priceNew:  142,
      image: "../../../assets/img/hotels/Items/4.jpg",
      facilities: {
        name:["Parking", "Restaurant"],
      },
      language: "French"
    }
  ];


  filteredHotelItems: HotelItem[] = [...this.HotelItems];
  filterpaging: HotelItem[] = [...this.HotelItems];;

  first: any = 0;
  rows: any = 4;
  totalRecords: any = this.HotelItems.length;

  constructor(
    config: NgbRatingConfig, 
    private hotelsService: HotelsService,
    private _filterService: FilterHotelDataServiceService,
    private router: Router,
  ) {
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
    this.hotelsService.filters$.subscribe(filters => {
      this.applyFilters(filters);
    });
  }

  applyFilters(filters: Filters) {
    console.log(filters);
    this.filteredHotelItems = this.HotelItems.filter(item => {
      const filterFacilitiesLower = filters.facilities ? filters.facilities.map((facility: string) => facility.split("_").map(word => word.toLowerCase()).join(' ')) : [];
      const filterLanguagesLower = filters.hostLanguages ? filters.hostLanguages.map((language: string) => language.toLowerCase()) : [];
      const filterStarsLower = filters.starCategories ? filters.starCategories.map((star: string) => star.toLowerCase()) : [];
      const filterLocationLower = filters.districts ? filters.districts.map((district: string) => district.toLowerCase()) : [];
      
      const matchesFacilities = !filterFacilitiesLower.length || item.facilities.name.some(facility => filterFacilitiesLower.includes(facility.toLowerCase()));
      const matchesLanguages = !filterLanguagesLower.length || filterLanguagesLower.includes(item.language?.toLowerCase() || '');
      const matchesStars = !filterStarsLower.length || filterStarsLower.some(star => item.rating === parseInt(star.split('_')[1], 10));

      const matchesDistricts = !filterLocationLower.length || filterLocationLower.includes(item.location?.toLowerCase() || '');

      const matchesPrice = item.priceNew >= this.PriceStart && item.priceNew <= this.PriceEnd;
  
      return matchesFacilities && matchesLanguages && matchesStars && matchesDistricts && matchesPrice;
    });
    this.totalRecords = this.filteredHotelItems.length;
    this.filterpaging = this.filteredHotelItems;

    this.updateFilteredItems();
  }

  removeFilter(filterType: string, value: string) {
    if (this.filters[filterType]) {
      const normalizedValue = value.split(' ').join('_').toLowerCase(); // Normalize the value to match the format in filters
      this.filters[filterType] = this.filters[filterType].filter(item => item.toLowerCase() !== normalizedValue);

      const updatedFilters: Filters = {
        districts: this.filters['districts'] || [],
        facilities: this.filters['facilities'] || [],
        hostLanguages: this.filters['hostLanguages'] || [],
        starCategories: this.filters['starCategories'] || []
      };
  
      this.applyFilters(updatedFilters);
    }
  }

  getAllFilters() {
    const allFilters: Filter[] = [];
    for (const [key, values] of Object.entries(this.filters)) {
      values.forEach(value => {
        value = value.split("_").join(' ')
        allFilters.push({ type: key, value });
      });
    }
    return allFilters;
  }

  onPageChange(event: PageEvent) {
    this.first = event.first || 0;
    this.rows = event.rows || 4;
    if(this.getAllFilters().length > 0) {
      this.updateFilteredItems();
    }
    else {
      this.updateItems();
    }
  }

  updateFilteredItems() {
    const start = this.first;
    const end = this.first + this.rows;
    this.filteredHotelItems = this.filterpaging.slice(start, end);
  }

  updateItems() {
    const start = this.first;
    const end = this.first + this.rows;
    this.filteredHotelItems = this.HotelItems.slice(start, end);
  }

  openHotelDetail(hotel: any) {
    this._filterService.resetSharedData();
    this._filterService.setSharedData(hotel);
    this.router.navigate(['HotelDetail']);
  }

}
