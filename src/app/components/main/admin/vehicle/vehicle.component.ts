import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle; // hold details about the vehicle
  vehicle_no;
  constructor(private route: ActivatedRoute, private adminservice: AdminService) {
    route.paramMap.subscribe( params => {
      this.vehicle_no = params.get('vehicle_no');
    });

  }

  ngOnInit() {
    this.adminservice.getVehicle(this.vehicle_no)
      .subscribe(vehicle => {

        this.vehicle = vehicle['data'][0];
        console.log(this.vehicle);
      });
  }

  addMaintenance() {

  }

}
