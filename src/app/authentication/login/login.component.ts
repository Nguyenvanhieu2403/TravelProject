import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../service/login-service.service';
import { RicaCommon } from '../../Rica-Common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../service/transfer/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  userName: any;
  passWord: any;
  CLIENT_ID: any =
    '578824434793-uksf883fjufqsdl0vb919q5jn41lr6g7.apps.googleusercontent.com';
  LINK_GET_TOKEN: any = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=http://localhost:4200&client_id=${this.CLIENT_ID}`;

  private common: RicaCommon = new RicaCommon();

  constructor(
    private service: LoginServiceService,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  gotoRegister() {
    window.location.href = '/register';
  }

  login() {
    this.service
      .login({ userName: this.userName, password: this.passWord })
      .then((res: any) => {
        if (res.statusCode == 200) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login success',
          });
          var result = res.result;
          this.common.SetCookie('token', result.token, 7);
          this.common.SetCookieObject('authData', result.user, 7);
          setTimeout(() => {
            this.router.navigate(['/']).then(() => {
              location.reload();
            });
          }, 2000);
          this.authService.getUserData();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Login failed: ' + res.error,
          });
          return;
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  loginGoogle() {
    console.log(this.LINK_GET_TOKEN);
    window.location.href = this.LINK_GET_TOKEN;
  }
}
