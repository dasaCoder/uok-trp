import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { MatSnackBar } from '@angular/material';

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
  
  constructor(private adminService: AdminService, public snackBar: MatSnackBar) {

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
          console.log('admin',responce);
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

}
