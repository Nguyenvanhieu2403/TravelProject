import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  value!: string;
  visible: boolean = false;
  countdown: any;
  intervalId: any;

  constructor() { }

  ngOnInit() {
  }

  gotoLogin() {
    window.location.href = '/login';
  }
  
  showDialog() {
    this.visible = true;
    this.countdown = 30;
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.intervalId); 
      }
    }, 1000); 
  }

}
