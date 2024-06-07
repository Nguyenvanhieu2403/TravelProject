import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-FlightHome',
  templateUrl: './FlightHome.component.html',
  styleUrls: ['./FlightHome.component.css']
})
export class FlightHomeComponent implements OnInit {
  flights = [
    {src : "../../../assets/img/flight-home/1.jpg",title: "france country" , name : "paris", description:"Embark on a luxurious Paris tour in style with premium flight class, where you'll experience unparalleled comfort and service throughout your journey", price: "from  $581.00*"},
    {src : "../../../assets/img/flight-home/2.jpg",title: "united kingdom" , name : "london", description:"Embark on a luxurious London tour in style with our first-class flight experience, where comfort meets elegance", price: "from  $500.00*"},
    {src : "../../../assets/img/flight-home/3.jpg",title: "switzerland" , name : "zurich", description:"Experience Zurich in style with our premium flight class, where luxury meets travel for an unforgettable journey", price: "from  $600.00*"},
    {src : "../../../assets/img/flight-home/4.jpg",title: "australia" , name : "sydney", description:"Embark on a luxurious Sydney tour with premium flight class, ensuring a first-class travel experience to this stunning destination", price: "from  $550.00*"}
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
