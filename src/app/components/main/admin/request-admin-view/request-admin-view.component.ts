import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../../../services/admin.service';
import {RequestService} from '../../../../services/request.service';
import {Request} from '../../../../classes/request';
import {ActivatedRoute} from '@angular/router';
import { ParamMap } from '@angular/router';
import {StatusEnum} from '../../../../classes/status';
import {Vehicle} from '../../../../classes/vehicle';
import {Driver} from '../../../../classes/driver';

@Component({
  selector: 'app-request-admin-view',
  templateUrl: './request-admin-view.component.html',
  styleUrls: ['./request-admin-view.component.css']
})
export class RequestAdminViewComponent implements OnInit, OnDestroy {

  @Input() selectedRequest;
  public source: string[] = [];
  public data: Array<string>;
  public vehicleSource: string[] = [];
  public vehicleData: Array<string>;
  driver_name;
  public vehicle_no;
  public isSetVehicle = false;
  public isSetDriver = false; // true when driver is set
  refNo;
  request: Request = new Request() ;
  // reqListOnVehicle; // this will hold the list of reqeust which belongs to vehicle when admin select vehicle
  constructor(private route: ActivatedRoute, private requestService: RequestService, private adminService: AdminService) {
  }

  ngOnInit() {
    console.log(this.selectedRequest);
    if (!this.selectedRequest) {
      // get referance number as route parameter and equal it to refNo variable
      this.route.paramMap.subscribe(params => {
        this.refNo = params.get('refNO');
        // console.log(this.refNo);
      });

      this.requestService.getOneRequest(this.refNo)
        .subscribe(response => {
          this.request = response['msg'][0];
          console.log(response);
        });
    } else {
      this.request = this.selectedRequest;
      alert(this.request['refNo']);
    }

    this.adminService.getDrivers()
      .subscribe( response => {
        for (let x = 0; x < response['msg'].length; x++) {
          this.source[x] = (response['msg'][x]['name']);
        }
        // this.source = response['msg'];
        // console.log(this.source);
        this.data = this.source.slice();
      });
    this.adminService.getVehicle_to_req()
      .subscribe((response => {

        for (let y = 0; y < response['msg'].length; y++) {
          this.vehicleSource[y] = response['msg'][y]['vehicle_no'];
        }
        this.vehicleData = this.vehicleSource.slice();
      }));
  }
  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  handleFilter2(value) {
    this.vehicleData = this.vehicleSource.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  addDriver() {
    console.log(this.driver_name);
    this.adminService.setDriver(this.request.refNo, this.driver_name)
      .subscribe( response => {
        console.log(response);
        if ( response['success'] === true) {
          this.isSetDriver = true;
        }
      })
  }
  acceptReq() {
    this.requestService.change_status(this.request['refNo'], 1)
      .subscribe( (response) => {
        console.log(response['msg']);
        location.reload();
      });


    // alert('accepted');
  }
  rejectReq() {
    this.requestService.change_status(this.request['refNo'], 3)
      .subscribe( (response) => {
        console.log(response['msg']);
        location.reload();
      });
    // alert('accepted');
  }
  /*set_vehicle() {
    if (this.vehicle_no != null) {
      this.adminService.set_vehicle(this.refNo, this.vehicle_no)
        .subscribe(response => {
          console.log(response);
          if (response['msg']){
            this.isSetVehicle = true;
          }
        });
    }
  }*/
  markDetailedReq() {
    this.requestService.change_status(this.request['refNo'], 4)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        location.reload();
      });
  }
  set_vehicle_no(value: any) {
    this.vehicle_no = value;
  }
  /*getRequestsList(vehicle_no) {
    if (vehicle_no !== '' && vehicle_no !== null) {
      this.set_vehicle_no(vehicle_no);
      this.adminService.getRequestList(vehicle_no)
        .subscribe( response => {
          if (response['msg'][0]) {
            this.reqListOnVehicle = response['msg'];
          } else {
            this.reqListOnVehicle = null;
          }
        });
    } else {
      this.reqListOnVehicle = null;
    }
  }*/

  setVehicle(vehicle: Vehicle) {
    this.request.vehicle = vehicle;
  }

  setDriver(driver: Driver) {
    console.log(driver);
    this.request.driver = driver;
  }

  ngOnDestroy(): void {
    // LocalStorage.
    // alert('going away');
  }
}
