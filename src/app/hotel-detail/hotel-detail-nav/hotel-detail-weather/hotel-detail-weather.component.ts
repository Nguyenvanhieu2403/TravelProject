import { Component, OnInit } from '@angular/core';
import { FilterHotelDataServiceService } from '../../../service/transfer/FilterHotelData-service.service';
import { WeatherServiceService } from '../../../service/weather-service.service';
import { HttpParams } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-hotel-detail-weather',
  templateUrl: './hotel-detail-weather.component.html',
  styleUrls: ['./hotel-detail-weather.component.css'],
})
export class HotelDetailWeatherComponent implements OnInit {
  hotel: any;
  location: any;
  listWeather: { date: string; img: string; avgtemp_C: any }[] = [];

  constructor(
    private _service: WeatherServiceService,
    private _filterService: FilterHotelDataServiceService
  ) {}

  ngOnInit() {
    this.hotel = this._filterService.getSharedData();
    if (this.hotel) {
      this.location = this.hotel.location;
    }
    this.getWeather();
    console.log(this.listWeather);
  }

  getWeather() {
    let params = new HttpParams()
      .set('Location', 'Hanoi')
      .set('Days', '4')
      .set('AirQuality', 'no')
      .set('Alerts', 'no');

    this._service
      .getWeatherData(params) // Gửi HttpParams vào phương thức gọi API
      .then((res) => {
        var data = res.forecast.forecastday;
        for (let i = 0; i < data.length; i++) {
          this.listWeather.push({
            date: format(Date.parse(data[i].date), 'dd-MMM'),
            img: 'https:' + data[i].day.condition.icon,
            avgtemp_C: data[i].day.avgtemp_C,
          });
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}
