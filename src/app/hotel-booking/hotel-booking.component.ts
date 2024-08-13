import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  payment() {
    return this.router.navigate(['/hotel-booking-failed']);
  }

}
