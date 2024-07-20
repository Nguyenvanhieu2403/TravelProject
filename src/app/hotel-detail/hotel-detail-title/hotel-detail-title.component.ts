import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FilterHotelDataServiceService } from '../../service/transfer/FilterHotelData-service.service';

@Component({
  selector: 'app-hotel-detail-title',
  templateUrl: './hotel-detail-title.component.html',
  styleUrls: ['./hotel-detail-title.component.css']
})
export class HotelDetailTitleComponent implements OnInit {

  hotel: any;
  title: any;
  price: any;
  rating: any;
  
  constructor(config: NgbRatingConfig, private _filterService: FilterHotelDataServiceService) { 
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
    this.hotel = this._filterService.getSharedData();
    if(this.hotel) {
      this.title = this.hotel.name;
      this.price = this.hotel.priceNew;
      this.rating = this.hotel.rating;
    }
  }

}
