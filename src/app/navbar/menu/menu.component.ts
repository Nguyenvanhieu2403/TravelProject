import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  right:any;
  display: any;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('vi');
  }


  ngOnInit() {
      
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  showNavbar() {
    this.right = "right: 0px";
    this.display = "display: block";
  }

  hideNavbar() {
    this.right = "right: -300px";
    this.display = "display: none";
  }

}
