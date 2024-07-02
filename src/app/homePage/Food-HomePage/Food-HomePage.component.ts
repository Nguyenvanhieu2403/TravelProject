import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Food-HomePage',
  templateUrl: './Food-HomePage.component.html',
  styleUrls: ['./Food-HomePage.component.css']
})
export class FoodHomePageComponent implements OnInit {

  foods = [
    {src : "../../../../assets/img/food-homepage/1.jpg",offer:true, priceOld:22000, priceNew:20000, name: "bread with chicken", star: 4, time: "30 minutes", description:"Golden-crusted bread complements savory chicken"},
    {src : "../../../../assets/img/food-homepage/2.jpg",offer:false, priceOld:20000, priceNew:18000, name: "bread with chicken", star: 3, time: "25 minutes", description:"Golden-crusted bread complements savory chicken"},
    {src : "../../../../assets/img/food-homepage/3.jpg",offer:true, priceOld:25000, priceNew:20000, name: "paneer vegetable", star: 5, time: "35 minutes", description:"Savory paneer-filled bread delight"},
    {src : "../../../../assets/img/food-homepage/2.jpg",offer:false, priceOld:15000, priceNew:14000, name: "lasagna noodles", star: 3, time: "20 minutes", description:"Savory fusion: bread meets lasagna"},
  ]

  customOptions: any = {
    loop: true,
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
