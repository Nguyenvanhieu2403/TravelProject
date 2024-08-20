import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './base.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { GoToTopComponent } from './common/GoToTop/GoToTop.component';
import { FooterComponent } from './Footer/Footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { ToursComponent } from './tours/tours.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    MenuComponent,
    GoToTopComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
