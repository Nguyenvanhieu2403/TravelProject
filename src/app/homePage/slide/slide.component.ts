import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  tabs = ['HOTEL', 'TOUR', 'FLIGHT', 'CAR', 'RESTAURANT'];
  selectedIndex: number = 0;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('vi');
  }

  ngOnInit() {
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

}
