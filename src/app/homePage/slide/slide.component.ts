import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  tabs = ['hotel', 'holiday', 'flight', 'car', 'food'];
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

}
