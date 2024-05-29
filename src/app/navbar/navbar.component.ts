import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ShowSetting:any = "display: none"
  Setting:any = false

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('vi');
  }


  ngOnInit() {
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
  }

  showSetting() {
    if (this.Setting) {
      this.ShowSetting = "display: none";
      this.Setting = false
    }
    else {
      this.ShowSetting = "display: block";
      this.Setting = true
    }
  }

}
