import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterHotelDataServiceService {

  private sharedData: any;  

  setSharedData(data: any) {
    this.sharedData = data;
  }
  resetSharedData() {
    this.sharedData = undefined;
  }
  getSharedData() {
    return this.sharedData;
  }

}
