import { Component, OnInit } from '@angular/core';
import {Driver} from '../../../../../classes/driver';
import {AdminService} from '../../../../../services/admin.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  public isSubmited: Boolean = false;
  public driverList: Driver[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllDriversDetails()
      .subscribe(data => {
        // console.log(data);
        if (data['msg'][0]) {
          this.driverList = data['msg'];
        } else {
          alert('error occured. please refresh');
        }

      });
  }

  addVehicle(Vehicle) {
    alert('added');
  }

}
