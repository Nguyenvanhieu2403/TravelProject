import { Injectable } from '@angular/core';
import { RicaCommon } from '../../Rica-Common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private common: RicaCommon = new RicaCommon();
  public userName: string = '';
  public email: string = '';
  public fullName: string = '';

  constructor() {
    this.getUserData(); // Initialize user data on service instantiation
  }

  getUserData(): void {
    const authData = this.common.GetCookieObject('authData');
    if (authData) {
      this.userName = authData.userName;
      this.email = authData.email;
      this.fullName = authData.fullName;
    }
  }

  clearUserData(): void {
    this.userName = '';
    this.email = '';
    this.fullName = '';
  }

}
