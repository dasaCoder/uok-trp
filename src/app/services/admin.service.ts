import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Driver} from '../classes/driver';
import {Vehicle} from '../classes/vehicle';

@Injectable()
export class AdminService {
  public url;
  public token: string;
  public headers;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/admin';
    this.token = 'Bearer ' + localStorage.getItem('token');
    this.headers = new HttpHeaders();
    this.headers.set('authorization', this.token);
  }

  adminLogin(username, password){
    let user = {
      username: username,
      password: password
    };
    return this.http.post(`http://localhost:3000/login`, user);
  }

  // return list of drivers (just names)
  getDrivers() {
    //let headers = new HttpHeaders();
    //let token = 'Bearer ' + localStorage.getItem('token');
    //this.headers.append('Authentication', token);
    return this.http.get('http://localhost:3000/admin/driver', {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // return one driver
  getDriver(_id: String) {
    return this.http.get(`http://localhost:3000/admin/driver/get?_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  getAllDriversDetails() {
    return this.http.get('http://localhost:3000/admin/get_all_driver_details', {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  getVehicle_to_req() {
    return this.http.get('http://localhost:3000/admin/vehicle/admin_to_request', {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  setDriver(refNo, _id) {
    // console.log(refNo + name);

    return this.http.post('http://localhost:3000/admin/driver/set_driver', {refNo: refNo, _id: _id}, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  set_vehicle(refNo, _id) {
    return this.http.get(`http://localhost:3000/admin/vehicle/set_vehicle/?refNo=${refNo}&_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  get_request_list(status) {
    return this.http.get(`http://localhost:3000/admin/get_request_list/?status=${status}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  getRequestList(vehicle_no) {
    return this.http.get(`http://localhost:3000/admin/get_request_on_vehicle?vehicle_no=${vehicle_no}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  // get list of request of a driver on a current day
  getRequestOfDriverOnDay(_id){
    return this.http.get(`${this.url}/get_driver_request_on_day?_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  /*
  * get list of reqeust of a driver for a given month
  * */
  getRequestOfDriverOnMonth(_id) {
    let date = new Date();
    let real_date = `${date.getFullYear()}-${date.getMonth() + 1}-1`;
    console.log(date);
    return this.http.get(`${this.url}/get_driver_request_on_month?_id=${_id}&month_f_d=${real_date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  /// add a new driver
  addDriver(driver: Driver) {
    return this.http.post(`${this.url}/driver`, driver, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  /// get list of drivers
  getListOfVehicles() {
    return this.http.get(`${this.url}/get_vehicle_list`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // add vehicle

  addVehicle(vehicle: Vehicle) {
    // console.log(vehicle);
    return this.http.post(`${this.url}/addVehicle`, vehicle, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }


  // get list of requests

  getRequestListOnDay(date){
    return this.http.get(`${this.url}/get_request_has_vehicle?date=${date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
}
