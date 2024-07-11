import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Food-Homepage-Items',
  templateUrl: './Food-Homepage-Items.component.html',
  styleUrls: ['./Food-Homepage-Items.component.css'],
  providers: [NgbRatingConfig],
})
export class FoodHomepageItemsComponent implements OnInit {

  @Input() src: any;
  @Input() offer: any;
  @Input() priceOld: any;
  @Input() priceNew: any;
  @Input() name: any;
  @Input() star: any;
  @Input() time: any;
  @Input() description: any;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit() {
  }

}
