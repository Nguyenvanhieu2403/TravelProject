import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-GoToTop',
  templateUrl: './GoToTop.component.html',
  styleUrls: ['./GoToTop.component.css']
})
export class GoToTopComponent implements OnInit {

  isShow: any;
  topPosToStartShowing = 100;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
