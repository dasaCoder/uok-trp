import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {

  }
  getDrivers() {
    return this.http.get('http://localhost:3000/admin/driver');
  }
  getVehicle_to_req() {
    return this.http.get('http://localhost:3000/admin/vehicle/admin_to_request');
  }
  serDriver() {
    return this.http.get('http://localhost:3000/');
  }
  set_vehicle(refNo, vehicle_no) {
    return this.http.get(`http://localhost:3000/admin/vehicle/set_vehicle/?refNo=${refNo}&vehicle_no=${vehicle_no}`);
  }
}