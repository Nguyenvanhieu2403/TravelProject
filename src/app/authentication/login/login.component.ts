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
        console.log(res);
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
            this.router.navigate(['/']);
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
}
