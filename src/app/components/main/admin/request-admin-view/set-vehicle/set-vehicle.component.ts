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
    alert(this.selectedVehicle['_id']);
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

}
