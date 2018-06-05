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
  public vehicleJobs = {
    'bus': [],
    'car': [],
    'van': [],
    'three_wheel': []
  };
  constructor(private adminService: AdminService) {
  }

  public selected = 1;
  public vehicle_types: any = [
    {
    disabled: false,
    type: 'car'
  }, {
    disabled: false,
    type: 'van'
  }, {
    disabled: false,
    type: 'bus'
  }, {
    disabled: false,
    type: 'three_wheel'
  }];

  ngOnInit() {
    this.adminService.getRequestListOnDay('2018-5-9')
      .subscribe(resp => {
        if (resp['success']) {
          this.requestList = resp['data'];
          for (let x = 0; x < this.requestList.length; x++ ) {
            this.vehicleJobs[this.requestList[x]['vehicle']['vehicle_type']].push(this.requestList[x]);
          }
          console.log(this.vehicleJobs);
        }
      });

    this.adminService.getListOfVehicles()
      .subscribe( resp => {
        if (resp['success'] === true) {
          this.vehicleList = resp['data'];
        }
      });
  }

}
