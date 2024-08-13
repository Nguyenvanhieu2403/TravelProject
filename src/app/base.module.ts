import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { PasswordModule } from 'primeng/password';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { LightboxModule } from 'ngx-lightbox';
import { NgxSliderModule } from 'ngx-slider-v2';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightgalleryModule } from 'lightgallery/angular';
import { BarRating } from 'ngx-bar-rating';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { InputOtpModule } from 'primeng/inputotp';

import { AppRoutingModule } from './app-routing.module';
import { HttpLoaderFactory } from './app.module';
import { HomePageComponent } from './homePage/homePage.component';
import { SearchHotelComponent } from './homePage/slide/searchHotel/searchHotel.component';
import { SlideComponent } from './homePage/slide/slide.component';
import { SearchHolidayComponent } from './homePage/slide/searchHoliday/searchHoliday.component';
import { SearchFlightComponent } from './homePage/slide/searchFlight/searchFlight.component';
import { SearchCarComponent } from './homePage/slide/searchCar/searchCar.component';
import { SearchFoodComponent } from './homePage/slide/searchFood/searchFood.component';
import { CategoryComponent } from './homePage/category/category.component';
import { CategoryItemComponent } from './homePage/category/CategoryItem/CategoryItem.component';
import { HotelComponent } from './homePage/hotel/hotel.component';
import { HotelTitleComponent } from './homePage/hotel/hotel-title/hotel-title.component';
import { AnimatedImagesComponent } from './homePage/hotel/animated-images/animated-images.component';
import { HoverRotateImgDirective } from './directives/HoverRotateImg.directive';
import { DiscountComponent } from './homePage/discount/discount.component';
import { VideoHomeComponent } from './homePage/discount/video-home/video-home.component';
import { FlightHomeComponent } from './homePage/FlightHome/FlightHome.component';
import { FlightHomeItemsComponent } from './homePage/FlightHome/FlightHomeItems/FlightHomeItems.component';
import { BannerComponent } from './homePage/Banner/Banner.component';
import { EmergencyCallComponent } from './homePage/EmergencyCall/EmergencyCall.component';
import { AnimationEmergencyComponent } from './homePage/EmergencyCall/animation-emergency/animation-emergency.component';
import { EmergencyTitleComponent } from './homePage/EmergencyCall/emergency-title/emergency-title.component';
import { AnimatedEmergencyImagesComponent } from './homePage/EmergencyCall/animated-images/animated-images.component';
import { HotelVideoHomepageComponent } from './homePage/hotel-video-homepage/hotel-video-homepage.component';
import { FoodHomePageComponent } from './homePage/Food-HomePage/Food-HomePage.component';
import { FoodHomepageTitleComponent } from './homePage/Food-HomePage/Food-Homepage-Title/Food-Homepage-Title.component';
import { FoodHomepageItemsComponent } from './homePage/Food-HomePage/Food-Homepage-Items/Food-Homepage-Items.component';
import { GallaryHomepageComponent } from './homePage/Gallary-homepage/Gallary-homepage.component';
import { GallaryHomepageTitleComponent } from './homePage/Gallary-homepage/Gallary-homepage-title/Gallary-homepage-title.component';
import { GallaryHomepageItemsComponent } from './homePage/Gallary-homepage/Gallary-homepage-items/Gallary-homepage-items.component';
import { SubcribeHomepageComponent } from './homePage/subcribe-homepage/subcribe-homepage.component';
import { LoginComponent } from './authentication/login/login.component';
import { LoginAnimationComponent } from './authentication/login/login-animation/login-animation.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RegisterAnimationComponent } from './authentication/register/register-animation/register-animation.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SearchHotelsComponent } from './hotels/SearchHotels/SearchHotels.component';
import { FilterHotelsComponent } from './hotels/FilterHotels/FilterHotels.component';
import { SearchFilterHotelComponent } from './hotels/FilterHotels/SearchFilterHotel/SearchFilterHotel.component';
import { FilterHotelsDataComponent } from './hotels/FilterHotelsData/FilterHotelsData.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailTitleComponent } from './hotel-detail/hotel-detail-title/hotel-detail-title.component';
import { HotelDetailTabSliderComponent } from './hotel-detail/hotel-detail-tab-slider/hotel-detail-tab-slider.component';
import { HotelDetailNavComponent } from './hotel-detail/hotel-detail-nav/hotel-detail-nav.component';
import { HotelDetailBookingComponent } from './hotel-detail/hotel-detail-nav/hotel-detail-booking/hotel-detail-booking.component';
import { HotelDetailInfoComponent } from './hotel-detail/hotel-detail-nav/hotel-detail-info/hotel-detail-info.component';
import { HotelDetailWeatherComponent } from './hotel-detail/hotel-detail-nav/hotel-detail-weather/hotel-detail-weather.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelBookingFailedComponent } from './hotel-booking/hotel-booking-failed/hotel-booking-failed.component';
import { HotelBookingSuccessComponent } from './hotel-booking/hotel-booking-success/hotel-booking-success.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,

    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    ToolbarModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    InputNumberModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CarouselModule,
    RatingModule,
    PasswordModule,
    SliderModule,
    NgxSliderModule,
    CheckboxModule,
    PaginatorModule,
    ImageModule,
    LightboxModule,
    LightgalleryModule,
    BarRating,
    ToastModule,
    AvatarModule,
    DialogModule,
    InputOtpModule,
  ],
  declarations: [
    HomePageComponent,
    SlideComponent,
    SearchHotelComponent,
    SearchHolidayComponent,
    SearchFlightComponent,
    SearchCarComponent,
    SearchFoodComponent,
    CategoryComponent,
    CategoryItemComponent,
    HotelComponent,
    HotelTitleComponent,
    AnimatedImagesComponent,
    HoverRotateImgDirective,
    DiscountComponent,
    VideoHomeComponent,
    FlightHomeComponent,
    FlightHomeItemsComponent,
    BannerComponent,
    EmergencyCallComponent,
    AnimationEmergencyComponent,
    EmergencyTitleComponent,
    AnimatedEmergencyImagesComponent,
    HotelVideoHomepageComponent,
    FoodHomePageComponent,
    FoodHomepageTitleComponent,
    FoodHomepageItemsComponent,
    GallaryHomepageComponent,
    GallaryHomepageTitleComponent,
    GallaryHomepageItemsComponent,
    SubcribeHomepageComponent,
    LoginComponent,
    LoginAnimationComponent,
    RegisterComponent,
    RegisterAnimationComponent,
    HotelsComponent,
    SearchHotelsComponent,
    FilterHotelsComponent,
    SearchFilterHotelComponent,
    FilterHotelsDataComponent,
    HotelDetailComponent,
    HotelDetailTitleComponent,
    HotelDetailTabSliderComponent,
    HotelDetailNavComponent,
    HotelDetailBookingComponent,
    HotelDetailInfoComponent,
    HotelDetailWeatherComponent,
    HotelBookingComponent,
    HotelBookingFailedComponent,
    HotelBookingSuccessComponent,
  ],
  providers: [CommonModule, DatePipe],
})
export class BaseModule {}
