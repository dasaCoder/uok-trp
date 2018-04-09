import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../services/admin.service';
import {RequestService} from '../../../../services/request.service';
import {Request} from '../../../../classes/request';
import {ActivatedRoute} from '@angular/router';
import { ParamMap } from '@angular/router';
import {StatusEnum} from '../../../../classes/status';

@Component({
  selector: 'app-request-admin-view',
  templateUrl: './request-admin-view.component.html',
  styleUrls: ['./request-admin-view.component.css']
})
export class RequestAdminViewComponent implements OnInit {
  public source: string[] = [];
  public data: Array<string>;
  public vehicleSource: string[] = [];
  public vehicleData: Array<string>;
  test;
  public vehicle_no;
  public isSetVehicle = false;
  refNo;
  request: Request = new Request() ;
  constructor(private route: ActivatedRoute, private requestService: RequestService, private adminService: AdminService) {
    // get referance number as route parameter and equal it to refNo variable
    this.route.paramMap.subscribe(params => {
      this.refNo = params.get('refNO');
      console.log(this.refNo);
    });

    requestService.getOneRequest(this.refNo)
      .subscribe(response => {
        this.request = response['msg'][0];
        console.log(response);
      });

    adminService.getDrivers()
      .subscribe( response => {
        for (let x = 0; x < response['msg'].length; x++) {
          this.source[x] = (response['msg'][x]['name']);
        }
       // this.source = response['msg'];
        // console.log(this.source);
        this.data = this.source.slice();
      });
    adminService.getVehicle_to_req()
      .subscribe((response => {
        for (let y = 0; y < response['msg'].length; y++) {
          this.vehicleSource[y] = response['msg'][y]['vehicle_no'];
        }
        this.vehicleData = this.vehicleSource.slice();
      }));
  }

  ngOnInit() {
  }
  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  handleFilter2(value) {
    this.vehicleData = this.vehicleSource.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  addDriver() {

  }
  acceptReq() {
    this.requestService.change_status(this.request['refNo'], StatusEnum.ACCEPTED)
      .subscribe( (response) => {
        console.log('response is ' + response['msg']);
      });
    // alert('accepted');
  }
  rejectReq() {
    this.requestService.change_status(this.request['refNo'], StatusEnum.REJECTED)
      .subscribe( (response) => {
        console.log('response is ' + response['msg']);
      });
    // alert('accepted');
  }
  set_vehicle() {
    if (this.vehicle_no != null) {
      this.adminService.set_vehicle(this.refNo, this.vehicle_no)
        .subscribe(response => {
          console.log(response);
          if (response['msg']){
            this.isSetVehicle = true;
          }
        });
    }
  }
  set_vehicle_no(value: any) {
    this.vehicle_no = value;
  }


}