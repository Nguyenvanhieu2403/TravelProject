import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FilterHotelDataServiceService } from '../../service/transfer/FilterHotelData-service.service';

@Component({
  selector: 'app-hotel-detail-title',
  templateUrl: './hotel-detail-title.component.html',
  styleUrls: ['./hotel-detail-title.component.css']
})
export class HotelDetailTitleComponent implements OnInit {


  @Input() title: any;
  @Input() price: number = 0;
  @Input() rating : number = 5;
  
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
  }

}
