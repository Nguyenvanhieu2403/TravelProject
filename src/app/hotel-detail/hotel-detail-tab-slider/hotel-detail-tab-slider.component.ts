import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hotel-detail-tab-slider',
  templateUrl: './hotel-detail-tab-slider.component.html',
  // template: `<div [innerHTML]="templateData"></div>`,
  styleUrls: ['./hotel-detail-tab-slider.component.css']
})
export class HotelDetailTabSliderComponent implements OnInit {

  tabs: { title: string, content: any }[] = [];
  about: any;
  facility: any;
  rooms: any;
  reviews: any;
  policies: any;
  hotels: any;
  hotel: any;

  templateData: string= "<p>absfhshfb</p>";

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
		config.readonly = true;
    this.about = [
      {
        title: "Enjoy A Luxurious Experience!", content: "A luxurious hotel in Duba, Sea view is just 500 meters away from the main center. Featuring palatial space, modern architecture and stylish interiors, this hotel is an ideal choice for a peaceful relaxation or a business trip."
      },
      {
        title: "Hotel Facilities", content: "The classy hotel has a swimming pool, spa and a fitness centre. It also features a well-appointed conference hall and a spacious harbour banquet conference centre for events and for meeting business needs. Complimentary Wi-Fi is provided on-premises. Other services offered are travel desk, car parking and credit card acceptance."
      },
      {
        title: "Dining", content: "The luxurious hotel in dubai features an in-house restaurant and a bar. Flame N Grill restaurant operates from 7.30 AM till midnight. It offers multi-cuisine menu including Continental, Chinese, Indian and Goan dishes. Pool Deck BAR is a paradise providing a range of beverages. Featuring a water fountain, it also offers a pleasant ambience to enjoy your drinks."
      },
      {
        title: "Room Facilities", content: "This hotel has 150 air-conditioned rooms including 50 Superior Rooms, 30 Deluxe Rooms, 10 Super Deluxe Rooms, 2 Classic Rooms and 5 Duplex Rooms. Most of the rooms have balconies offering spectacular views of the environs and a few offering phenomenal views of the pool. With contemporary furniture and elegant decor, all the rooms ensure utmost comfort for the guests. Some in-room amenities include LCD TV with satellite connection, minibar and an electronic safe deposit box."
      }
    ]

    this.facility = [
      {
        name: "Basic Facility",
        src: "../../../assets/img/hotel-detail/tab-slides/verified.png",
        item: [
          {
            name: "Free Wi-Fi"
          },
          {
            name: "Room Service"
          },
          {
            name: "Elevator Lift"
          },
          {
            name: "Laundry Service"
          },
          {
            name: "Power Backup"
          },
          {
            name: "Free Parking"
          },
        ],
      },
      {
        name: "Payment Mode",
        src: "../../../assets/img/hotel-detail/tab-slides/credit-card.png",
        item: [
          {
            name: "Visa Card"
          },
          {
            name: "Master Card"
          },
          {
            name: "American Express"
          },
          {
            name: "Debit Card"
          },
          {
            name: "Cash"
          },
          {
            name: "Online Banking"
          }
        ]
      },
      {
        name: "Security",
        src: "../../../assets/img/hotel-detail/tab-slides/cctv.png",
        item: [
          {
            name: "Security Guard"
          },
          {
            name: "CCTV"
          },
          {
            name: "Emergency Exit"
          },
          {
            name: "Doctor On Call"
          }
        ]
      },
      {
        name: "Food & Drinks",
        src: "../../../assets/img/hotel-detail/tab-slides/tray.png",
        item: [
          {
            name: "Restaurant"
          },
          {
            name: "Bar"
          }
        ]
      },
      {
        name: "Activities",
        src: "../../../assets/img/hotel-detail/tab-slides/barbell.png",
        item: [
          {
            name: "Gym"
          },
          {
            name: "Game Zone"
          },
          {
            name: "Swimming Pool"
          }
        ]
      }
    ]

    this.rooms = [
      {
        name: "Deluxe Room",
        src: "../../../assets/img/hotel-detail/tab-slides/rooms/4.jpg",
        amenities: [
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/bed.png",
            name: "King/Twin"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/shower.png",
            name: "Shower"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/television.png",
            name: " LCD TV"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/couch.png",
            name: "Couch"
          }
        ],
        inclusion: [
          {
            name: "Wi-Fi"
          },
          {
            name: "Breakfast"
          },
          {
            name: "Non Refundable"
          }
        ],
        priceOld: 1250,
        priceNew: 1000
      },
      {
        name: "Suite Room",
        src: "../../../assets/img/hotel-detail/tab-slides/rooms/5.jpg",
        amenities: [
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/bed.png",
            name: "King/Twin"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/pool.png",
            name: "Pool View"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/shower.png",
            name: "Shower"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/television.png",
            name: " LCD TV"
          }
        ],
        inclusion: [
          {
            name: "Wi-Fi"
          },
          {
            name: "Breakfast"
          },
          {
            name: "Free Cancellation"
          }
        ],
        priceOld: 1350,
        priceNew: 1100
      },
      {
        name: "Royal Room",
        src: "../../../assets/img/hotel-detail/tab-slides/rooms/4.jpg",
        amenities: [
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/bed.png",
            name: "King/Twin"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/pool.png",
            name: "Pool View"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/shower.png",
            name: "Shower"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/television.png",
            name: " LCD TV"
          },
          {
            icon: "../../../assets/img/hotel-detail/tab-slides/rooms/icon/couch.png",
            name: "Couch"
          }
        ],
        inclusion: [
          {
            name: "Wi-Fi"
          },
          {
            name: "Breakfast"
          },
          {
            name: "Dinner & Lunch"
          }
        ],
        priceOld: 1950,
        priceNew: 1800
      }
    ]
    this.reviews = [
      {
        star: 5,
        title: "The stay in the hotel was excellent",
        owner: "By Xyz",
        datetime: "Jun 18, 2019",
        content: "Our stay at sea view was pleasant. We stayed here for a day and the view from the room was brilliant. Rooms were clean hygienic and big. foods were amazing. rooms were neat and clean.staff is very courteous and cooperative.great place to stay. Good atmosphere, Staff was amazing..well education..mannered. Room was spacious and cleaned more then an expected."
      },
      {
        star: 4,
        title: "Awesome Stay..value for money",
        owner: "By Xyz",
        datetime: "Jun 18, 2019",
        content: "We were there for 3 nights and hotel was too good. Greenery was flaunting everywhere. There were games kept for our entertainment. View from room was good. Hotel staff behavior was nice. They provided each and every service in hand. Overall stay was too good."
      },
      {
        star: 3,
        title: "Best getaway destination with family",
        owner: "By Xyz",
        datetime: "Jun 18, 2019",
        content: "The location, view from the rooms are just awesome. Very cool landscaping has been done Around the hotel. There are small activities that you can indulge with your family. Pool wasn't functional at the time of our stay. In all, the stay is really peaceful, calm and Silent. A place we would definitely want to visit again."
      }
    ]

    this.policies = [
      {
        content:"Check-in: 2.00 PM, Check-out: 12.00 PM"
      },
      {
        content:"The primary guest must be at least 18 years of age to check into this hotel."
      },
      {
        content:"It is mandatory for guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Without Original copy of valid ID the guest will not be allowed to check-in."
      },
      {
        content:"Local ID proof & Pan card will not be acceptable as ID proof."
      },
      {
        content:"Unless mentioned, the tariff does not include charges for optional room services (such as telephone calls, room service, mini bar, snacks, laundry extra bed etc.). In case, such additional charges are levied by the hotel(s), we shall not be held responsible for it."
      },
      {
        content:"Personal food and beverages are strictly not permitted on the hotel premises."
      },
      {
        content:"The hotel shall not be responsible for any loss of or damage to your personal belongings.In case any damage is done to the hotel property by guests during their stay, it will be the sole accountability of the guest."
      },
      {
        content:"No charge for children below 6 years and the extra cost will be applicable for availing an extra bed in a double occupancy room."
      },
      {
        content:"Should any action by a guest be deemed inappropriate by the hotel, or if any inappropriate behaviour is brought to the attention of the hotel, the hotel reserves the right, after the allegations have been investigated, to take action against the guest."
      },
      {
        content:"We would love to host you but in case your plans change, our simple cancellation process makes sure you receive a quick confirmation and fast refunds. Our standard check-in time is 12 noon and you can check-in any time after that till your reservation is valid."
      },
      {
        content:"Pets are not allowed in the hotel premises."
      },

    ]

    this.hotels = [
      {
        id: 1,
        name: "the venetian",
        location: " Newyork",
        description: "The Venetian Hotel is a lavish resort in Las Vegas, featuring opulent Italian-inspired architecture, complete with indoor canals and gondola rides",
        review: 26412,
        rating: 4,
        priceOld:  130,
        priceNew:  124,
        image: "../../../assets/img/hotels/Items/1.jpg",
        facilities: {
          name:["Pet Allowed", "Restaurant"],
        },
        offer: "Recommended",
        language: "English"
      },
      {
        id: 2,
        name: "The Ritz-Carlton",
        location: "Paris",
        description: "Nestled in the heart of Paris, this iconic hotel offers exquisite luxury and impeccable service, providing an elegant retreat near the Louvre",
        review: 25000,
        rating: 2,
        priceOld:  120,
        priceNew:  117,
        image: "../../../assets/img/hotels/Items/2.jpg",
        facilities: {
          name:["Swimming Pool", "fitness Center"],
        },
        offer: "Hot Deal",
        language: "Suomi"
      },
      {
        id: 3,
        name: "Mandarin Oriental",
        location: " Tokyo",
        description: "Set in the bustling metropolis of Tokyo, this high-rise hotel boasts panoramic city views and a harmonious blend of Japanese aesthetics and contemporary luxury",
        review: 26412,
        rating: 5,
        priceOld:  100,
        priceNew:  985,
        image: "../../../assets/img/hotels/Items/3.jpg",
        facilities: {
          name:["Wifi", "Restaurant"],
        },
        offer: "Certified",
        language: "Espanol"
      },
      {
        id: 4,
        name: "Four Seasons Safari",
        location: "Tanzania",
        description: "Surrounded by the vast plains of the Serengeti, this safari lodge offers a unique blend of wildlife adventure and five-star comfort, allowing guests to experience the wonders of Africa",
        review: 26412,
        rating: 3,
        priceOld:  150,
        priceNew:  142,
        image: "../../../assets/img/hotels/Items/4.jpg",
        facilities: {
          name:["Parking", "Restaurant"],
        },
        language: "French"
      },
      {
        id: 5,
        name: "the venetian 111",
        location: " Newyork",
        description: "The Venetian Hotel is a lavish resort in Las Vegas, featuring opulent Italian-inspired architecture, complete with indoor canals and gondola rides",
        review: 26412,
        rating: 4,
        priceOld:  130,
        priceNew:  124,
        image: "../../../assets/img/hotels/Items/1.jpg",
        facilities: {
          name:["Pet Allowed", "Restaurant"],
        },
        offer: "Recommended",
        language: "English"
      },
      {
        id: 6,
        name: "The Ritz-Carlton 111",
        location: "Paris",
        description: "Nestled in the heart of Paris, this iconic hotel offers exquisite luxury and impeccable service, providing an elegant retreat near the Louvre",
        review: 25000,
        rating: 2,
        priceOld:  120,
        priceNew:  117,
        image: "../../../assets/img/hotels/Items/2.jpg",
        facilities: {
          name:["Swimming Pool", "fitness Center"],
        },
        offer: "Hot Deal",
        language: "Suomi"
      },
      {
        id: 7,
        name: "Mandarin Oriental 111",
        location: " Tokyo",
        description: "Set in the bustling metropolis of Tokyo, this high-rise hotel boasts panoramic city views and a harmonious blend of Japanese aesthetics and contemporary luxury",
        review: 26412,
        rating: 5,
        priceOld:  100,
        priceNew:  985,
        image: "../../../assets/img/hotels/Items/3.jpg",
        facilities: {
          name:["Wifi", "Restaurant"],
        },
        offer: "Certified",
        language: "Espanol"
      },
      {
        id: 8,
        name: "Four Seasons Safari 111",
        location: "Tanzania",
        description: "Surrounded by the vast plains of the Serengeti, this safari lodge offers a unique blend of wildlife adventure and five-star comfort, allowing guests to experience the wonders of Africa",
        review: 26412,
        rating: 3,
        priceOld:  150,
        priceNew:  142,
        image: "../../../assets/img/hotels/Items/4.jpg",
        facilities: {
          name:["Parking", "Restaurant"],
        },
        language: "French"
      }
    ];
  }

  ngOnInit() {
    this.tabs = [
      { title: 'ABOUT', content: this.about },
      { title: 'ROOMS', content: this.rooms },
      { title: 'FACILITY', content: this.facility },
      { title: 'LOCATION', content: 'Tab 1 Content' },
      { title: 'REVIEWS', content: this.reviews },
      { title: 'POLICIES', content: this.policies }
    ];
  }

  

}
