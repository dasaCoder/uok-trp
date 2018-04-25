import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Driver} from '../classes/driver';

@Injectable()
export class AdminService {
  public url;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/admin';
  }

  // return list of drivers
  getDrivers() {
    return this.http.get('http://localhost:3000/admin/driver');
  }

  // return one driver
  getDriver(_id: String) {
    return this.http.get(`http://localhost:3000/admin/driver/get?_id=${_id}`);
  }
  getAllDriversDetails() {
    return this.http.get('http://localhost:3000/admin/get_all_driver_details');
  }
  getVehicle_to_req() {
    return this.http.get('http://localhost:3000/admin/vehicle/admin_to_request');
  }
  setDriver(refNo, _id) {
    // console.log(refNo + name);

    return this.http.post('http://localhost:3000/admin/driver/set_driver', {refNo: refNo, _id: _id});
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
  // get list of request of a driver on a current day
  getRequestOfDriverOnDay(_id){
    return this.http.get(`${this.url}/get_driver_request_on_day?_id=${_id}`);
  }

  /// add a new driver
  addDriver(driver: Driver) {
    return this.http.post(`${this.url}/driver`, driver);
  }
}
