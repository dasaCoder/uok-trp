import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {RequestService} from '../../../services/request.service';
import {AdminService} from '../../../services/admin.service';
import {Driver} from '../../../classes/driver';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vehicle_list: Object[];
  not_considered_requests: Object[];
  not_reviewed_requests = [];
  accepted_requests = [];
  confirmed_requests = [];
  detailed_requests = [];
  driverList: Driver[];
  constructor(
    private vehicleService: VehicleService,
    private requestService: RequestService,
    private adminService: AdminService,
    private authservice: AuthService) {

  }

  ngOnInit() {
    this.vehicleService.get_vehicle_list()
      .subscribe(response => {
        this.vehicle_list = response['msg'];
        // console.log(response['msg']);
      });
    this.requestService.get_not_considered_requests()
      .subscribe(response => {
        // console.log(response['msg']);
        this.not_considered_requests = response['msg'];
        console.log('not considerd' + this.not_considered_requests.length);
      });
    this.adminService.get_request_list(0)
      .subscribe(response => {
        this.not_reviewed_requests = response['msg'];
      });
    this.adminService.get_request_list(1)
      .subscribe( response => {
        this.accepted_requests = response['msg'];
      })
    this.adminService.get_request_list(2)
      .subscribe( response => {
        this.confirmed_requests = response['msg'];
      });
    this.adminService.get_request_list(4)
      .subscribe( response => {
        this.detailed_requests = response['msg'];
      });
    this.adminService.getAllDriversDetails()
      .subscribe(response => {
        this.driverList = response['msg'];
      })
  }


  logout(){
    if(confirm("Confirm Logout.....")){
      this.authservice.logout();
      window.location.reload();
    }

  }

}
