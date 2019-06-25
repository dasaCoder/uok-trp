import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // add admin variables
  username: String;
  password: String;
  role: String;

  // change password
  newPassword: String;
  oldPassword: String;
  confirmPassword: String;
  
  constructor(private authService: AuthService, private adminService: AdminService, public snackBar: MatSnackBar) {

   }

  ngOnInit() {
  }

  addAdmin() {
    let admin = {
      'username' : this.username,
      'password' : this.password,
      'role'      : this.role
    };

    this.adminService.addAdmin(admin)
        .subscribe(responce => {
          this.username = '';
          this.password = '';
          this.role = null;

          if(responce['success']){
            this.snackBar.open("Admin Added Successfully!","Got it",{
              duration: 3000,
              verticalPosition: 'top'
            })
          } else {
            this.snackBar.open("Error occured...","Got it",{
              duration: 3000,
              verticalPosition: 'top'
            })
          }
        })
  }

  //change admin password
  changeAdminPassword() {
    let obj = {
      "username": localStorage.getItem('username'),
      "oldPassword": this.oldPassword,
      "newPassword": this.newPassword
    };

    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';

    this.adminService.changeAdminPassword(obj)
        .subscribe(response => {
          console.log('change password',response);
          if(response['success']){
            this.snackBar.open("Password changed Successfully!","Got it",{
              duration: 3000,
              verticalPosition: 'top'
            })
          } else {
            this.snackBar.open("Error occured...","Got it",{
              duration: 3000,
              verticalPosition: 'top'
            })
          }
        })
  }

}
