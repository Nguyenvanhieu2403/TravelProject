import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Gallary-homepage-items',
  templateUrl: './Gallary-homepage-items.component.html',
  styleUrls: ['./Gallary-homepage-items.component.css']
})
export class GallaryHomepageItemsComponent implements OnInit {

  @Input() src: any;
  @Input() name: any;

  constructor() { }

  ngOnInit() {
  }

}
