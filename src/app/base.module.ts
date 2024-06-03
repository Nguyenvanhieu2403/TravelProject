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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryItemComponent } from './homePage/category/CategoryItem/CategoryItem.component';
import { HotelComponent } from './homePage/hotel/hotel.component';
import { HotelTitleComponent } from './homePage/hotel/hotel-title/hotel-title.component';
import { AnimatedImagesComponent } from './homePage/hotel/animated-images/animated-images.component';
import { HoverRotateImgDirective } from './homePage/hotel/animated-images/HoverRotateImg.directive';
import { DiscountComponent } from './homePage/discount/discount.component';
import { VideoHomeComponent } from './homePage/discount/video-home/video-home.component';


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
        deps: [HttpClient]
      }
    }),
    CarouselModule ,
    RatingModule
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
    VideoHomeComponent
  ],
  providers: [CommonModule, DatePipe],
})
export class BaseModule { }
