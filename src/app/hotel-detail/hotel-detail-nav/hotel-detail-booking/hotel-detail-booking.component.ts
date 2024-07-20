import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FilterHotelDataServiceService } from '../../../service/transfer/FilterHotelData-service.service';

@Component({
  selector: 'app-hotel-detail-booking',
  templateUrl: './hotel-detail-booking.component.html',
  styleUrls: ['./hotel-detail-booking.component.css'],
  providers: [MessageService]
})
export class HotelDetailBookingComponent implements OnInit {

  isSelectorBoxVisible: boolean = false;
  adult: number = 1;
  child: number = 1;
  room : number = 1;
  checkIn: Date | undefined;
  checkOut: Date | undefined;

  hotel: any;
  priceOld: any;
  priceNew: any;

  constructor(private messageService: MessageService, private _filterService: FilterHotelDataServiceService) { }

  ngOnInit() {
    this.hotel = this._filterService.getSharedData();
    if(this.hotel) {
      this.priceOld = this.hotel.priceOld;
      this.priceNew = this.hotel.priceNew;
    }
  }

  toggleShow(){
    this.isSelectorBoxVisible = !this.isSelectorBoxVisible;
  }

  toggleShowTaget() {
    this.isSelectorBoxVisible = false;
  }

  addAdult() {
    this.adult++;
  }

  removeAdult() {
    if(this.adult <= 1){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Must have at least 1 adult',
      });
      return;
    }
    this.adult--;
  }

  addChild() {
    this.child++;
  }

  removeChild() {
    if( this.child > 0){
      this.child--;
    }
  }

  addRoom() {
    this.room++;
  }

  removeRoom() {
    if(this.room <= 1){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Must have at least 1 room',
      });
      return;
    }
    this.room--;
  }

}
