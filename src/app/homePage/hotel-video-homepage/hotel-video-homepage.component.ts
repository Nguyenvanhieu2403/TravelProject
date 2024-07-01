import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel-video-homepage',
  templateUrl: './hotel-video-homepage.component.html',
  styleUrls: ['./hotel-video-homepage.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HotelVideoHomepageComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbModalConfig) { 
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

}
