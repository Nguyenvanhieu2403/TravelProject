import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  endPoint: any;

  constructor(
    private _http: HttpClient,
    _injector: Injector
  ) {
    this.endPoint = `${environment.apiDomain.devEndpoint}/${environment.apiDomain.gateway}`;
  }

  register(model: any): Promise<any> {
    const apiUrl = `${this.endPoint}/auth/register`;
    return this._http
      .post<any>(apiUrl, model)
      .toPromise()
      .catch((error) => {
        return Promise.reject(error.message || error);
      });
  }

  sendOTP(model: any): Promise<any> {
    const apiUrl = `${this.endPoint}/auth/send-otp`;
    return this._http
      .post<any>(apiUrl, model)
      .toPromise()
      .catch((error) => {
        return Promise.reject(error.message || error);
      });
  }

}
