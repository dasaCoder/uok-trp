import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';

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
  
  constructor(private adminService: AdminService) {

   }

  ngOnInit() {
  }

  addAdmin() {

  }

}
