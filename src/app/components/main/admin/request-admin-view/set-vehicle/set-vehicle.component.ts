import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../../../../classes/vehicle';
import {AdminService} from '../../../../../services/admin.service';

@Component({
  selector: 'app-set-vehicle',
  templateUrl: './set-vehicle.component.html',
  styleUrls: ['./set-vehicle.component.css']
})
export class SetVehicleComponent implements OnInit {

  @Input() refNo;

  public vehicle_lists = [];
  reqListOnVehicle; // this will hold the list of reqeust which belongs to vehicle when admin select vehicle
  public selectedVehicle = {};
  public imageUrl = '/assets/images/pattern/pattern.png';
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getListOfDrivers()
      .subscribe( response => {
        this.vehicle_lists = response['data'];
      });
  }

  onclickVehicle(vehicle) {
    this.selectedVehicle = vehicle;
    this.getRequestsList(vehicle.vehicle_no);
  }

  set_vehicle() {
    if (this.selectedVehicle != null) {
      this.adminService.set_vehicle(this.refNo, this.selectedVehicle['_id'])
        .subscribe(response => {
          console.log(response);
          if (response['msg']){
            // this.isSetVehicle = true;
          }
        });
    }
  }

  getRequestsList(vehicle_no) {
    if (vehicle_no !== '' && vehicle_no !== null) {
      this.adminService.getRequestList(vehicle_no)
        .subscribe( response => {
          console.log(response);
          if (response['msg'][0]) {
            this.reqListOnVehicle = response['msg'];
          } else {
            this.reqListOnVehicle = null;
          }
        });
    } else {
      this.reqListOnVehicle = null;
    }
  }

}
