import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  endPoint: any;

  constructor(
    private _http: HttpClient,
    _injector: Injector
  ) {
    this.endPoint = `${environment.apiDomain.devEndpoint}/${environment.apiDomain.gateway}`;
  }

  login(model: any): Promise<any> {
    const apiUrl = `${this.endPoint}/auth/login`;
    return this._http
      .post<any>(apiUrl, model)
      .toPromise()
      .catch((error) => {
        return Promise.reject(error.message || error);
      });
  }
}
