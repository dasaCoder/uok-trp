import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vehicle_list: Object[];
  constructor(private vehicleService: VehicleService) {
    vehicleService.get_vehicle_list()
      .subscribe(response => {
        this.vehicle_list = response['msg'];
        // console.log(response['msg']);
      });
  }

  ngOnInit() {
  }

}
