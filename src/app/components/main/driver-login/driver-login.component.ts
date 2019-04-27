import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  txtUserName;
  txtPassword;
  constructor() { }

  ngOnInit() {
  }

  driverLogin() {
    alert(this.txtPassword);
  }

}
