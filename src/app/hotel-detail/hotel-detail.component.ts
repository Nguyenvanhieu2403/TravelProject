import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  items = [
    {
      id: '1',
      size: '1400-933',
      src:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/11.jpg',
      thumb:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/11.jpg'
    },
    {
      id: '2',
      size: '1400-933',
      src:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/10.jpg',
      thumb:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/10.jpg'
    },
    {
      id: '3',
      size: '1400-932',
      src:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/9.jpg',
      thumb:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/9.jpg'
    },
    {
      id: '4',
      size: '1400-932',
      src:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/4.jpg',
      thumb:
        'https://angular.pixelstrap.net/rica/assets/images/hotel/room/4.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgShare, lgHash],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const { index, prevIndex } = detail;
  };

}
