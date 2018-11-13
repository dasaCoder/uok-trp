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

  selectedDate = new Date();
  formatedDate;

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

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10)
    {
      dd = '0'+ dd;
    }

    if(mm<10)
    {
      mm = '0'+ mm;
    }

    today = yyyy + '-' + dd + '-' + mm;

    this.adminService.getRequestListOnDay(today)
      .subscribe(resp => {
        if (resp['success']) {
          this.requestList = resp['data'];
          //console.log(this.requestList);
          this.requestList.sort(this.sortFunction);
          console.log(this.requestList);
          for (let x = 0; x < this.requestList.length; x++ ) {
            this.vehicleJobs[this.requestList[x]['vehicle']['vehicle_type']].push(this.requestList[x]);
          }
          // console.log(this.vehicleJobs);
        }
      });

    this.adminService.getListOfVehicles()
      .subscribe( resp => {
        if (resp['success'] === true) {
          this.vehicleList = resp['data'];
        }
      });
  }
  sortFunction(a, b) {
    if (a['departure']['pickupTime'] === b['departure']['pickupTime']) {
      return 0;
    }
    else {
      return (a['departure']['pickupTime'] < b['departure']['pickupTime']) ? -1 : 1;
    }
  }

  picker() {
    this.formatedDate = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`;
  }

}
