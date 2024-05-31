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
import { AppRoutingModule } from './app-routing.module';
import { HttpLoaderFactory } from './app.module';
import { HomePageComponent } from './homePage/homePage.component';
import { SearchHotelComponent } from './homePage/slide/searchHotel/searchHotel.component';
import { SlideComponent } from './homePage/slide/slide.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    NgbModule
  ],
  declarations: [
    
    HomePageComponent,
    SlideComponent,
    SearchHotelComponent
  ],
  providers: [CommonModule, DatePipe],
})
export class BaseModule { }
