import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../../services/admin.service';
import {Vehicle} from '../../../../../classes/vehicle';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  public requestList: Request[];
  public vehicleList: Vehicle[];
  constructor(private adminService: AdminService) {
  }

  public selected = 1;
  public vehicle_types: any = [{
    disabled: false,
    type: 'Car',
  }, {
    disabled: false,
    type: 'Van'
  }, {
    disabled: false,
    type: 'Bus'
  }, {
    disabled: false,
    type: 'Three Wheel'
  }];

  ngOnInit() {
    this.adminService.getRequestListOnDay('2018-4-19')
      .subscribe(resp => {
        if (resp['success']) {
          this.requestList = resp['data'];
        }
        console.log(this.requestList);
      });

    this.adminService.getListOfVehicles()
      .subscribe( resp => {
        if (resp['success'] === true) {
          this.vehicleList = resp['data'];
        }
      });
  }

}
