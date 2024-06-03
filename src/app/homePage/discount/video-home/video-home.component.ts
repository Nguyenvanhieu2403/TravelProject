import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class VideoHomeComponent implements OnInit {

  date: any;
  now: any;
  targetDate: any = new Date(2024, 5, 8);
  targetTime: any = this.targetDate.getTime();
  difference: any;

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  constructor(config: NgbModalConfig, private modalService: NgbModal,) {
    config.backdrop = 'static';
		config.keyboard = false;
   }

  ngOnInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }

  open(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

}
