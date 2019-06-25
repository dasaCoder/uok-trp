import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  txtUserName;
  txtPassword;
  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  driverLogin() {
    let driver = {
      'liecence' : this.txtUserName,
      'password' : this.txtPassword
    };

    this.authService.driverLogin(driver)
        .subscribe(response=> {
          if(response['status']== '200'){
            this.snackBar.open("Logged In Successfully!","Got it",{
              duration: 2000,
              verticalPosition: 'top'
            });

            let jwtHelper = new JwtHelper();
            let token_decoded = jwtHelper.decodeToken(response['token']);

            localStorage.setItem('username',token_decoded['username']);
            
          } else {
            this.snackBar.open("Error occured...","Got it",{
              duration: 3000,
              verticalPosition: 'top'
            })
          }
        })
  }

}
