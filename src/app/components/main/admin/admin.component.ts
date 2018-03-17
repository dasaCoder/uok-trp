import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {RequestService} from '../../../services/request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vehicle_list: Object[];
  not_considered_requests: Object[];
  constructor(private vehicleService: VehicleService, private requestService: RequestService) {
    vehicleService.get_vehicle_list()
      .subscribe(response => {
        this.vehicle_list = response['msg'];
        // console.log(response['msg']);
      });
    requestService.get_not_considered_requests()
      .subscribe(response => {
        // console.log(response['msg']);
        this.not_considered_requests = response['msg'];
      });
  }

  ngOnInit() {
  }

}
