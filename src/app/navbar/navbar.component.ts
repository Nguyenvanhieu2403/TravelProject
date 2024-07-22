import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RicaCommon } from '../Rica-Common';
import { AvatarModule } from 'primeng/avatar';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../service/transfer/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService],
})
export class NavbarComponent implements OnInit {
  ShowSetting: any = 'display: none';
  Setting: any = false;
  IsUser: any = false;

  userName: any;
  email: any;
  fullName: any;

  private common: RicaCommon = new RicaCommon();

  constructor(
    private translate: TranslateService,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    translate.setDefaultLang('vi');
  }

  ngOnInit() {
    const token = this.common.GetCookie('token');
    if (token) {
      this.IsUser = true;
    }

    this.userName = this.authService.userName;
    this.email = this.authService.email;
    this.fullName = this.authService.fullName;
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
  }

  showSetting() {
    if (this.Setting) {
      this.ShowSetting = 'display: none';
      this.Setting = false;
    } else {
      this.ShowSetting = 'display: block';
      this.Setting = true;
    }
  }

  logout() {
    this.common.SetCookie('token', '', -1);
    this.common.SetCookieObject('authData', '', -1);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Logout success',
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
