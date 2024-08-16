import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  isShowSearch = false;

  constructor() { }

  ngOnInit() {
  }

  handleShowSearch(isShown: boolean) {
    this.isShowSearch = isShown;
  }

}
