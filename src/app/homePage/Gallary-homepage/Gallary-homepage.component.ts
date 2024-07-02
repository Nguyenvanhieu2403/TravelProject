import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Gallary-homepage',
  templateUrl: './Gallary-homepage.component.html',
  styleUrls: ['./Gallary-homepage.component.css']
})
export class GallaryHomepageComponent implements OnInit {

  gallarys = [
    {src: "../../../assets/img/gallary-homepage/1.jpg", name: "2 nights gateway promotion package"},
    {src: "../../../assets/img/gallary-homepage/2.jpg", name: "1 nights beach promotion package"},
    {src: "../../../assets/img/gallary-homepage/3.jpg", name: "free lunch for 3 days package"},
    {src: "../../../assets/img/gallary-homepage/4.jpg", name: "2 nights gateway promotion package"},
    {src: "../../../assets/img/gallary-homepage/5.jpg", name: "2 nights gateway promotion package"},
  ]

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true
  }

  constructor() { }

  ngOnInit() {
  }

}
