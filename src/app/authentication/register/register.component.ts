import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegisterService } from '../../service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  value!: string;
  visible: boolean = false;
  countdown: any;
  intervalId: any;
  resend: any;

  UserName: any;
  FullName: any;
  Password: any;
  ConfirmPassword: any;
  PhoneNumber: any;
  Address: any;
  Email: any;
  otp: any;

  constructor(
    private messageService: MessageService,
    private _service: RegisterService
  ) {}

  ngOnInit() {}

  gotoLogin() {
    window.location.href = '/login';
  }

  register() {
    if (
      this.UserName == null ||
      this.FullName == null ||
      this.Password == null ||
      this.ConfirmPassword == null ||
      this.PhoneNumber == null ||
      this.Address == null ||
      this.Email == null
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Phải nhập tất cả các trường',
      });
      return;
    }

    if (this.Password != this.ConfirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mật khẩu không khớp',
      });
      return;
    }

    this.otp = this.generateOTP();
    var modelOtp = {
      email: this.Email,
      otp: this.otp,
    };
    this._service
      .sendOTP(modelOtp)
      .then((res) => {
        if (res.statusCode != 200) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error when send OTP',
          });
          return;
        }
        this.visible = true;
        this.countdown = 30;
        this.startCountdown();
      })
      .catch((error) => {
        console.log('Error:', error);
      });
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

  generateOTP(): number {
    clearInterval(this.intervalId);
    const min = 100000; // Số nhỏ nhất có 6 chữ số
    const max = 999999; // Số lớn nhất có 6 chữ số
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  resendCode() {
    if (this.countdown > 0) {
      return;
    }
    this.otp = this.generateOTP();
    var modelOtp = {
      email: this.Email,
      otp: this.otp,
    };
    this._service
      .sendOTP(modelOtp)
      .then((res) => {
        if (res.statusCode != 200) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error when send OTP',
          });
          return;
        }
        this.countdown = 30;
        this.startCountdown();
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  submitOTP() {
    if (this.value == null || this.value == '' || this.value == undefined) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Phải nhập mã OTP',
      });
      return;
    }

    if (this.value != this.otp) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mã OTP không đúng',
      });
      return;
    }

    var model = {
      userName: this.UserName,
      fullName: this.FullName,
      password: this.Password,
      email: this.Email,
      phoneNumber: this.PhoneNumber,
      address: this.Address,
    };
    this._service
      .register(model)
      .then((res) => {
        if (res.statusCode != 200) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error when register',
          });
          return;
        }
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register success',
        });
        setTimeout(() => {
          this.gotoLogin();
        }, 2000);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}
