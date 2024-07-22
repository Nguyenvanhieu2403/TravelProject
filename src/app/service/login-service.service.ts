import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  endPoint: any;

  private authChangeSub = new Subject<boolean>();
  private extAuthChangeSub = new Subject<SocialUser>();
  public authChanged = this.authChangeSub.asObservable();
  public extAuthChanged = this.extAuthChangeSub.asObservable();

  constructor(
    private _http: HttpClient,
    _injector: Injector,
    private externalAuthService: SocialAuthService
  ) {
    this.endPoint = `${environment.apiDomain.devEndpoint}/${environment.apiDomain.gateway}`;
  }

  login(model: any): Promise<any> {
    const apiUrl = `${this.endPoint}/auth/login`;
    this.extAuthChangeSub.next(model);
    return this._http
      .post<any>(apiUrl, model)
      .toPromise()
      .catch((error) => {
        return Promise.reject(error.message || error);
      });
  }

  public signInWithGoogle = () => {
    this.externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  };
  public signOutExternal = () => {
    this.externalAuthService.signOut();
  };
}
