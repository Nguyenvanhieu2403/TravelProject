import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  endPoint: any;

  constructor(private _http: HttpClient, _injector: Injector) {
    this.endPoint = `${environment.apiDomain.devEndpoint}/${environment.apiDomain.gateway}`;
  }

  // getWeatherData(model: any): Promise<any> {
  //   const apiUrl = `${this.endPoint}/weather`;
  //   return this._http
  //     .get<any>(apiUrl, model)
  //     .toPromise()
  //     .catch((error) => {
  //       return Promise.reject(error.message || error);
  //     });
  // }

  getWeatherData(params: HttpParams): Promise<any> {
    const apiUrl = `${this.endPoint}/weather`;
    return this._http.get<any>(apiUrl, { params: params }).toPromise();
  }
}
