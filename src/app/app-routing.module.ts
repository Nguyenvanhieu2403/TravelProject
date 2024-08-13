import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelBookingFailedComponent } from './hotel-booking/hotel-booking-failed/hotel-booking-failed.component';
import { HotelBookingSuccessComponent } from './hotel-booking/hotel-booking-success/hotel-booking-success.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotel', component: HotelsComponent },
  { path: 'HotelDetail', component: HotelDetailComponent },
  { path: 'HotelBooking', component: HotelBookingComponent },
  { path: 'hotel-booking-success', component: HotelBookingSuccessComponent},
  { path: 'hotel-booking-failed', component: HotelBookingFailedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
