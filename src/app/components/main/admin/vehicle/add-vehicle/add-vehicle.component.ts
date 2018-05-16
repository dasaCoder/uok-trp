import { Component, OnInit } from '@angular/core';
import {Driver} from '../../../../../classes/driver';
import {AdminService} from '../../../../../services/admin.service';
import {Vehicle} from '../../../../../classes/vehicle';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  public isSubmited: Boolean = false;
  public driverList: Driver[];

  constructor(private adminService: AdminService, private router: Router) { }

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

  addVehicle(vehicle: Vehicle) {
    this.isSubmited = true;
      console.log(vehicle);

    this.adminService.addVehicle(vehicle)
      .subscribe(response => {
        if(response['success'] === false) {
          alert('error occured. please try again');
          this.isSubmited = false;
        } else if( response['success'] === true) {
          alert(response['msg']);
          this.isSubmited = false;

          this.router.navigate(['/admin']);

        }
      })
    // alert('added');
  }

}
