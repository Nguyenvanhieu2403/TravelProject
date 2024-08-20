import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { HotelsService } from '../../hotels/hotels.service';
import { FilterHotelDataServiceService } from '../../service/transfer/FilterHotelData-service.service';

interface Filter {
  type: string;
  value: string;
}

interface Filters {
  flights: any[];
  stripDuration: any[];
  traveType: any[];
  starCategories: any[];
}

interface HotelItem {
  id: number;
  name: string;
  day: string;
  planeDeparture: string;
  include: any;
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
  selector: 'app-filter-tour-data',
  templateUrl: './filter-tour-data.component.html',
  styleUrls: ['./filter-tour-data.component.css']
})
export class FilterTourDataComponent implements OnInit {
  
  
    @Input() PriceStart: any;
    @Input() PriceEnd: any;
    @Input() filters: { [key: string]: any[] } = {};
  
    @Output() PriceChange = new EventEmitter<{ value: number, highValue: number }>();
    
  
    HotelItems: HotelItem[] = [
      {
        id: 1,
        name: "beautiful Bali",
        day: " (6D 7N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  130,
        priceNew:  124,
        image: "../../../assets/img/tours/list-tours/7.jpg",
        facilities: {
          name:["Pet Allowed", "Restaurant"],
        },
        offer: "Recommended",
        language: "English"
      },
      {
        id: 2,
        name: "best of europe",
        day: "(5D 6N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  120,
        priceNew:  117,
        image: "../../../assets/img/tours/list-tours/8.jpg",
        facilities: {
          name:["Swimming Pool", "fitness Center"],
        },
        offer: "Hot Deal",
        language: "Suomi"
      },
      {
        id: 3,
        name: "dubai adventure",
        day: " (5D 6N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  100,
        priceNew:  985,
        image: "../../../assets/img/tours/list-tours/9.jpg",
        facilities: {
          name:["Wifi", "Restaurant"],
        },
        offer: "Certified",
        language: "Espanol"
      },
      {
        id: 4,
        name: "exploring sydney",
        day: "(4D 5N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  150,
        priceNew:  142,
        image: "../../../assets/img/tours/list-tours/10.jpg",
        facilities: {
          name:["Parking", "Restaurant"],
        },
        language: "French"
      },
      {
        id: 5,
        name: "splendid spain",
        day: " (6D 7N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  130,
        priceNew:  124,
        image: "../../../assets/img/tours/list-tours/11.jpg",
        facilities: {
          name:["Pet Allowed", "Restaurant"],
        },
        offer: "Recommended",
        language: "English"
      },
      {
        id: 6,
        name: "simply mauritius",
        day: "(3D 4N)",
        planeDeparture: " Kuta (2N) → Lombok (2N) → Ubud (2N) ",
        
        include: [
          {
            icon: "../../../assets/img/tours/list-tours/icon/hotel.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/airplane.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/fork.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/photo-camera.png"
          },
          {
            icon: "../../../assets/img/tours/list-tours/icon/visa.png"
          },
        ],
        priceOld:  120,
        priceNew:  117,
        image: "../../../assets/img/tours/list-tours/12.jpg",
        facilities: {
          name:["Swimming Pool", "fitness Center"],
        },
        offer: "Hot Deal",
        language: "Suomi"
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
  
    applyFilters(filters: any) {
      this.filters = filters;
      this.filteredHotelItems = this.HotelItems.filter(item => {
        const filterFacilitiesLower = filters.stripDuration ? filters.stripDuration.map((item: any) => item.id.toLowerCase()) : [];
        const filterLanguagesLower = filters.traveType ? filters.traveType.map((language: any) => language.id.toLowerCase()) : [];
        const filterStarsLower = filters.starCategories ? filters.starCategories.map((star: any) => star.id.toLowerCase()) : [];
        const filterLocationLower = filters.flights ? filters.flights.map((district: any) => district.id.toLowerCase()) : [];
        
        const matchesFacilities = !filterFacilitiesLower.length || item.facilities.name.some(facility => filterFacilitiesLower.includes(facility.toLowerCase()));
        const matchesLanguages = !filterLanguagesLower.length || filterLanguagesLower.includes(item.language?.toLowerCase() || '');
        //const matchesStars = !filterStarsLower.length || filterStarsLower.some(star => item.rating === parseInt(star.split('_')[1], 10));
  
        const matchesDistricts = !filterLocationLower.length || filterLocationLower.includes(item.day?.toLowerCase() || '');
  
        const matchesPrice = item.priceNew >= this.PriceStart && item.priceNew <= this.PriceEnd;
    
        return matchesFacilities && matchesLanguages && matchesDistricts && matchesPrice//  && matchesStars;
      });
      this.totalRecords = this.filteredHotelItems.length;
      this.filterpaging = this.filteredHotelItems;
      this.updateFilteredItems();
    }
  
    removeFilter(filterType: string, value: any) {
      if (this.filters[filterType]) {
        const normalizedValue = value.toLowerCase(); // Normalize the value to match the format in filters
        this.filters[filterType] = this.filters[filterType].filter(item => item.name.toLowerCase() !== normalizedValue);
  
        const updatedFilters: Filters = {
          flights: this.filters['flights'] || [],
          stripDuration: this.filters['stripDuration'] || [],
          traveType: this.filters['traveType'] || [],
          starCategories: this.filters['starCategories'] || []
        };
    
        this.applyFilters(updatedFilters);
      }
    }
  
    getAllFilters() {
      const allFilters: Filter[] = [];
      for (const [key, values] of Object.entries(this.filters)) {
        values.forEach(value => {
          value = value.name;
          allFilters.push({ type: key, value });
        });
      }
      return allFilters;
    }
  
    onPageChange(event: PageEvent) {``
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
