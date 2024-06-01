import { Component, OnInit } from '@angular/core';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-CategoryItem',
  templateUrl: './CategoryItem.component.html',
  styleUrls: ['./CategoryItem.component.css']
})
export class CategoryItemComponent implements OnInit {

  rate: any = 5;

  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false
  }
  

  constructor() { }

  ngOnInit() {
  }

}
