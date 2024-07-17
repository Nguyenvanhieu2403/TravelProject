import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel-detail-title',
  templateUrl: './hotel-detail-title.component.html',
  styleUrls: ['./hotel-detail-title.component.css']
})
export class HotelDetailTitleComponent implements OnInit {

  rating : number = 4
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
  }

}
