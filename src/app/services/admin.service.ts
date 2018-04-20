import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {

  }

  // return list of drivers
  getDrivers() {
    return this.http.get('http://localhost:3000/admin/driver');
  }

  // return one driver
  getDriver(_id: String) {
    return this.http.get(`http://localhost:3000/admin/driver/get?_id=${_id}`);
  }
  getVehicle_to_req() {
    return this.http.get('http://localhost:3000/admin/vehicle/admin_to_request');
  }
  setDriver(refNo, name) {
    console.log(refNo + name);

    return this.http.post('http://localhost:3000/admin/driver/set_driver', {refNo: refNo, name: name});
  }
  set_vehicle(refNo, vehicle_no) {
    return this.http.get(`http://localhost:3000/admin/vehicle/set_vehicle/?refNo=${refNo}&vehicle_no=${vehicle_no}`);
  }
  get_vehicle_list(status) {
    return this.http.get(`http://localhost:3000/admin/get_request_list/?status=${status}`);
  }
  getRequestList(vehicle_no) {
    return this.http.get(`http://localhost:3000/admin/get_request_on_vehicle?vehicle_no=${vehicle_no}`);
  }
}
